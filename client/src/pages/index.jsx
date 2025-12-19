import { BookOpen, Clock8, Users } from "lucide-react";
import Hero from "../components/index/Hero";
import FeatureOf4books from "../components/index/featureOf4books";

export default function Index() {
  return (
    <div>
      <Hero />
      <div className="md:flex gap-2 justify-around items-center my-2 pt-8">
        <div className="flex flex-col gap-2 items-center">
          <BookOpen
            size={40}
            className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
          />
          <span className="text-2xl font-bold">8</span>
          <p>Books Available</p>
        </div>
        <div className="flex flex-col gap-2 my-6 items-center">
          <Users
            size={40}
            className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
          />
          <span className="text-2xl font-bold">2,500+</span>
          <p>Active Members</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <Clock8
            size={40}
            className="bg-yellow-100 rounded-2xl text-yellow-600 p-2"
          />
          <span className="text-2xl font-bold">30 Days</span>
          <p>Loan Period</p>
        </div>
      </div>

      <FeatureOf4books />
    </div>
  );
}
