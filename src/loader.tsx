import { Dumbbell } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Dumbbell className="animate-spin text-4xl text-white" />
        <span className="text-white mt-4">Loading AI Fitness...</span>
      </div>
    </div>
  );
};

export default Loader;
