import { useEffect, useRef, useState } from "react";
import { PageWrapper } from "../components/PageWrapper/PageWrapper";
import { EventsList } from "../components/EventsList/EventsList";
import { fetchEvents } from "../services/events-api";
import { showNotification } from "../services/show-notification";
import { Toaster } from "react-hot-toast";
import { RotatingLines } from "react-loader-spinner";
import { sortEvents } from "../services/sort-events";
import { SortPanel } from "../components/SortPanel/SortPanel";

const EventsBoard = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(null);
  const [totalPages, setTotalPages] = useState(null);

  const triggerRef = useRef(null);

  // Sort, defaults: ascending + title
  const [sortOrder, setSortOrder] = useState("ascending");
  const [sortBy, setSortBy] = useState("title");

  const sortedEvents = sortEvents(events, sortBy, sortOrder);

  const onTitleClick = () => {
    setSortBy("title");
    if (sortOrder === "descending") {
      setSortOrder("ascending");
    } else {
      setSortOrder("descending");
    }
  };

  const onDateClick = () => {
    setSortBy("eventDate");

    if (sortOrder === "descending") {
      setSortOrder("ascending");
    } else {
      setSortOrder("descending");
    }
  };

  const onOrganizerClick = () => {
    setSortBy("organizer");

    if (sortOrder === "descending") {
      setSortOrder("ascending");
    } else {
      setSortOrder("descending");
    }
  };

  // =======================

  // Effect to fetch events
  useEffect(() => {
    async function getEvents() {
      try {
        setIsLoading(true);

        const response = await fetchEvents(page, 9);

        setEvents((prevEvents) => [...prevEvents, ...response.events]);

        setCurrentPage(response.currentPage);

        setTotalPages(response.totalPages);
      } catch (error) {
        setIsLoading(false);
        showNotification(false, error.response.data.message);
      } finally {
        setIsLoading(false);
      }
    }

    getEvents();
  }, [page]);

  // Effect with observer to get more events, when scrolled to bottom of page
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (
        entries[0].isIntersecting &&
        !isLoading &&
        currentPage != totalPages
      ) {
        setPage((prevPage) => prevPage + 1);
      }
    });

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => {
      if (triggerRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(triggerRef.current);
      }
    };
  }, [currentPage, isLoading, totalPages]);

  return (
    <PageWrapper>
      <h1 style={{ marginBottom: "20px", textAlign: "center" }}>Events</h1>

      <SortPanel
        onTitleClick={onTitleClick}
        onDateClick={onDateClick}
        onOrganizerClick={onOrganizerClick}
        order={sortOrder}
      />
      <EventsList events={sortedEvents} />

      <div id="trigger" ref={triggerRef}></div>

      {isLoading && (
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      )}

      <Toaster />
    </PageWrapper>
  );
};

export default EventsBoard;
