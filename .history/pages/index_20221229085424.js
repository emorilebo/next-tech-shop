export default function Home() {
  return (
    <div className="p-5">
      <div>
        <h2>Mobiles</h2>
        <div className="py-4">
          <div className="w-64">
            <div className="bg-blue-100 p-5 rounded-xl">
              <img src="/products/iphone.png" alt="" />
            </div>
            <div className="mt-2">
              <h3 className="font-bold text-lg">Iphone 14 Pro</h3>
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sit amet,
              consectetur adipiscing elit{" "}
            </p>
            <div className="flex">
            <p className="text-2xl">N899</p>
              <button className="bg-emerald-500 text-white py-1 px-3 rounded">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
