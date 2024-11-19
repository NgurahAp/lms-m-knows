import LoadingSpinner from "../../components/reusable/LoadingSpinner";
import { useAllAssignmentData } from "../../hooks/useAllAsignment";

export const Penugasan = () => {
  const { data, isLoading, error } = useAllAssignmentData();

  if (isLoading) {
    return <LoadingSpinner text="Loading..." />;
  }

  if (error) {
    return (
      <div className="min-h-[85vh] w-screen flex items-center justify-center">
        Error loading data
      </div>
    );
  }

  console.log(data);



  return (
    <div className="h-full w-screen flex flex-col md:pt-44 pt-24 md:px-36 px-8 bg-gray-100">
      <section className="bg-white mt-5 rounded-xl">
        
      </section>
    </div>
  );
};

export default Penugasan;
