import NumberTicker from "./ui/number-ticker";

const stats = [
  { label: "Cars Available", value: 250 },
  { label: "Happy Customers", value: 1500 },
  { label: "Cities Served", value: 35 },
  { label: "Years in Business", value: 10 },
];

const Stats = () => (
  <section className="p-10 bg-black text-white">
    <h2 className="text-3xl font-bold text-center mb-10">Our Achievements</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      {stats.map((stat, index) => (
        <div key={index} className="p-5 rounded-lg">
          <p className="whitespace-pre-wrap text-6xl font-medium tracking-tighter mb-2">
            <NumberTicker value={stat.value} />
          </p>
          <p className="text-xl text-gray-400">{stat.label}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Stats;
