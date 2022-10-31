/* This example requires Tailwind CSS v2.0+ */
const incentives = [
    {
      name: 'Lorem ipsum dolor.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
      description: "Vestibulum a urna ut ex mollis feugiat.",
    },
    {
      name: 'Lorem ipsum dolor.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
      description: "Quisque finibus dui ac urna consequat, in semper felis dictum.",
    },
    {
      name: 'Lorem ipsum dolor.',
      imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
      description:"Ut efficitur justo ut rutrum eleifend.",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="">
        <div className="max-w-7xl mx-auto sm:px-2 py-12 lg:px-4">
          <div className="max-w-2xl mx-auto px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="text-4xl font-gilroy-bold tracking-tight text-gray-600 dark:text-dark-txt">
              Lorem Ipsum
              </h2>
              <p className="mt-4 text-gray-500">
              "No hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor."
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="w-16 h-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-gilroy-medium text-gray-900 dark:text-white">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  