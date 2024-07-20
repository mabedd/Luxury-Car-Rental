import TweetCard from "./ui/tweet-card";

const TweetCards = () => (
  <section className="p-10 bg-black">
    <h2 className="text-3xl font-bold text-center mb-10 text-white">
      What Our Customers Are Saying
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <TweetCard id="1234567890" />
      <TweetCard id="1234567891" />
      <TweetCard id="1234567892" />
      <TweetCard id="1234567893" />
    </div>
  </section>
);

export default TweetCards;
