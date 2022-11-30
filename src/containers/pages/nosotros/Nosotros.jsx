import FullWidthLayout from "hocs/layouts/FullWidthLayout"
import { connect } from "react-redux"
import { Fragment, useEffect } from 'react'
import { Tab } from '@headlessui/react'
import { Link } from "react-router-dom"

const tabs = [
    {
        name: 'Adventure Travel',
        features: [
            {
                name: 'Proyecto En Django',
                description:
                    'Proyecto para diplomado en desarrollo de software tercer ciclo construido en Django',
                imageSrc: 'https://user-images.githubusercontent.com/96089651/193485293-8c218f12-c573-49ff-b652-6b0a0a7cc893.png',
                imageAlt: '',
                url: 'https://github.com/MetsysNwod/adventured-travel',
                tech_stack: [
                    {
                        name: 'Django',
                        imageSrc: 'https://bafybeidozsktzxp6jnzwgs5fg6b5yvx7spszpzuyvu4ixb7lvau7yg4rdq.ipfs.dweb.link/django-logo-png-transparent.png',
                    },
                    /* {
                        name:  '',
                        imageSrc: '',
                    }, */
                    {
                        name: 'MySQL',
                        imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSpxjh_Dki1zijNvqD-cnWimiF1V5tLgTGxQ&usqp=CAU',
                    },
                    /*   {
                          name:  '',
                          imageSrc: '',
                      }, */
                ]
            },
        ],
    },
    {
        name: 'Programación Reactiva',
        features: [
            {
                name: 'Proyecto usando RxJS',
                description:
                    'La programación reactiva es un paradigma de programación basado en la gestión de flujos de datos asíncronos (streams) y en la propagación del cambio. RxJS es una librería Javascript de programación reactiva que facilita la composición de código asíncrono basado en secuencias de observables.',
                imageSrc: 'https://user-images.githubusercontent.com/96089651/193484739-3c82e805-0f6a-4570-b4da-016081295097.png',
                imageAlt:
                    '',
                url: 'https://github.com/MetsysNwod/RxJS',
                tech_stack: [
                    {
                        name: 'RxJS',
                        imageSrc: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.3LEtakq19bdpYU_cVMLx_wHaCZ%26pid%3DApi&f=1&ipt=ac761b000d408cad3bd21728f48fab9b294028577a0eae06f25be37c8b9062de&ipo=images',
                    },
                    /*  {
                         name:  '',
                         imageSrc: '',
                     },
                     {
                         name:  '',
                         imageSrc: '',
                     },
                     {
                         name:  '',
                         imageSrc: '',
                     },
                     {
                         name:  '',
                         imageSrc: '',
                     }, */
                ]
            },
        ],
    },
    /*   {
        name: '',
        features: [
          {
            name: '',
            description:
              "",
            imageSrc: '',
            imageAlt: '',
            url: '',
            tech_stack: [
                {
                    name:  '',
                    imageSrc: '',
                },
                {
                    name:  '',
                    imageSrc: '',
                },
                {
                    name:  '',
                    imageSrc: '',
                },
                {
                    name:  '',
                    imageSrc: '',
                },
                {
                    name:  '',
                    imageSrc: '',
                },
            ]
          },
        ],
      }, */
]



const people = [
    {
        name: 'Sebastian Echeverry',
        role: 'Founder / CEO',
        imageUrl:
            'https://avatars.githubusercontent.com/u/96089651?v=4',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare massa eget egestas purus viverra accumsan in. Donec adipiscing tristique risus nec feugiat. Lectus mauris ultrices eros in cursus turpis massa. Vel pharetra vel turpis nunc eget. At ultrices mi tempus imperdiet nulla malesuada. Dolor purus non enim praesent elementum facilisis leo vel. Magna sit amet purus gravida quis blandit turpis cursus. Enim nunc faucibus a pellentesque sit. Eleifend mi in nulla posuere sollicitudin aliquam. Nisl vel pretium lectus quam. Arcu dictum varius duis at consectetur lorem donec massa sapien. Erat nam at lectus urna duis convallis. Integer enim neque volutpat ac tincidunt vitae. Parturient montes nascetur ridiculus mus mauris vitae ultricies leo integer.',
        twitterUrl: 'https://twitter.com/SbeTec',
        linkedinUrl: 'https://www.linkedin.com/in/sebastian-e-37aa25158/',
        youtubeUrl: 'https://www.youtube.com/channel/UC_LHeBs46NkqIh4_SAmGYiQ',
    },
    // More people...
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function About() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <FullWidthLayout>
            <div className="mx-auto pt-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:pt-24">
                <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
                    <div className="space-y-5 sm:space-y-4">
                        <h2 className="text-3xl font-gilroy-black tracking-tight sm:text-4xl dark:text-white">Sobre Nosotros</h2>
                        <p className="text-xl text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit, facilisis habitant duis commodo aenean accumsan vivamus, in felis phasellus nec gravida blandit. Viverra leo dis suspendisse dui pellentesque at nisl, felis iaculis vel dictumst a urna, lectus ridiculus erat ultrices arcu netus. Sodales aenean et interdum tempor morbi porttitor eleifend egestas proin dis nostra neque, curae tincidunt inceptos orci phasellus sed magnis fames sociosqu velit duis.
                        </p>
                    </div>
                    <div className="lg:col-span-2">
                        <ul
                            role="list"
                            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
                        >
                            {people.map((person) => (
                                <li key={person.name} className="sm:py-8">
                                    <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                                        <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                                            <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                                        </div>
                                        <div className="sm:col-span-2">
                                            <div className="space-y-4">
                                                <div className="text-lg leading-6 font-gilroy-medium space-y-1">
                                                    <h3 className="dark:text-dark-txt">{person.name}</h3>
                                                    <p className="text-blue-600">{person.role}</p>
                                                </div>
                                                <div className="text-lg">
                                                    <p className="text-gray-500">{person.bio}</p>
                                                </div>
                                                <ul role="list" className="flex space-x-5">
                                                    <li>
                                                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Twitter</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fill="evenodd" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">LinkedIn</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href={person.youtubeUrl} className="text-gray-400 hover:text-gray-500">
                                                            <span className="sr-only">Youtube</span>
                                                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                                <path  d="M9.426,7.625h0.271c0.596,0,1.079-0.48,1.079-1.073V4.808c0-0.593-0.483-1.073-1.079-1.073H9.426c-0.597,0-1.079,0.48-1.079,1.073v1.745C8.347,7.145,8.83,7.625,9.426,7.625 M9.156,4.741c0-0.222,0.182-0.402,0.404-0.402c0.225,0,0.405,0.18,0.405,0.402V6.62c0,0.222-0.181,0.402-0.405,0.402c-0.223,0-0.404-0.181-0.404-0.402V4.741z M12.126,7.625c0.539,0,1.013-0.47,1.013-0.47v0.403h0.81V3.735h-0.81v2.952c0,0-0.271,0.335-0.54,0.335c-0.271,0-0.271-0.202-0.271-0.202V3.735h-0.81v3.354C11.519,7.089,11.586,7.625,12.126,7.625 M6.254,7.559H7.2v-2.08l1.079-2.952H7.401L6.727,4.473L6.052,2.527H5.107l1.146,2.952V7.559z M11.586,12.003c-0.175,0-0.312,0.104-0.405,0.204v2.706c0.086,0.091,0.213,0.18,0.405,0.18c0.405,0,0.405-0.451,0.405-0.451v-2.188C11.991,12.453,11.924,12.003,11.586,12.003 M14.961,8.463c0,0-2.477-0.129-4.961-0.129c-2.475,0-4.96,0.129-4.96,0.129c-1.119,0-2.025,0.864-2.025,1.93c0,0-0.203,1.252-0.203,2.511c0,1.252,0.203,2.51,0.203,2.51c0,1.066,0.906,1.931,2.025,1.931c0,0,2.438,0.129,4.96,0.129c2.437,0,4.961-0.129,4.961-0.129c1.117,0,2.024-0.864,2.024-1.931c0,0,0.202-1.268,0.202-2.51c0-1.268-0.202-2.511-0.202-2.511C16.985,9.328,16.078,8.463,14.961,8.463 M7.065,10.651H6.052v5.085H5.107v-5.085H4.095V9.814h2.97V10.651z M9.628,15.736h-0.81v-0.386c0,0-0.472,0.45-1.012,0.45c-0.54,0-0.606-0.515-0.606-0.515v-3.991h0.809v3.733c0,0,0,0.193,0.271,0.193c0.27,0,0.54-0.322,0.54-0.322v-3.604h0.81V15.736z M12.801,14.771c0,0,0,1.03-0.742,1.03c-0.455,0-0.73-0.241-0.878-0.429v0.364h-0.876V9.814h0.876v1.92c0.135-0.142,0.464-0.439,0.878-0.439c0.54,0,0.742,0.45,0.742,1.03V14.771z M15.973,12.39v1.287h-1.688v0.965c0,0,0,0.451,0.405,0.451s0.405-0.451,0.405-0.451v-0.45h0.877v0.708c0,0-0.136,0.901-1.215,0.901c-1.08,0-1.282-0.901-1.282-0.901v-2.51c0,0,0-1.095,1.282-1.095S15.973,12.39,15.973,12.39 M14.69,12.003c-0.405,0-0.405,0.45-0.405,0.45v0.579h0.811v-0.579C15.096,12.453,15.096,12.003,14.69,12.003"></path>
                                                            </svg>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <section aria-labelledby="features-heading" className="max-w-7xl mx-auto py-16 sm:px-2 lg:px-8">
                <div className="max-w-2xl mx-auto px-4 lg:px-0 lg:max-w-none">
                    <div className="max-w-3xl">
                        <h2 id="features-heading" className="text-3xl font-gilroy-black tracking-tight text-gray-900 sm:text-4xl">
                            Portafolio
                        </h2>
                        <p className="mt-4 text-gray-500 font-gilroy-medium">
                            Nuestro portafolio de proyectos creados y repositorio en GitHub.
                        </p>
                    </div>

                    <Tab.Group as="div" className="">
                        <div className="-mx-4 flex overflow-x-auto sm:mx-0">
                            <div className="flex-auto px-4 border-b border-gray-200 sm:px-0">
                                <Tab.List className="-mb-px flex space-x-10">
                                    {tabs.map((tab) => (
                                        <Tab
                                            key={tab.name}
                                            className={({ selected }) =>
                                                classNames(
                                                    selected
                                                        ? 'border-blue-500 text-blue-600'
                                                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                                    'whitespace-nowrap py-6 border-b-2 font-gilroy-medium text-sm'
                                                )
                                            }
                                        >
                                            {tab.name}
                                        </Tab>
                                    ))}
                                </Tab.List>
                            </div>
                        </div>

                        <Tab.Panels as={Fragment}>
                            {tabs.map((tab) => (
                                <Tab.Panel key={tab.name} className="space-y-16 pt-10 lg:pt-16">
                                    {tab.features.map((feature) => (
                                        <div key={feature.name} className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
                                            <div className="mt-6 lg:mt-0 lg:col-span-5">
                                                <h3 className="text-lg font-gilroy-medium text-gray-900">{feature.name}</h3>
                                                <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                                                <a
                                                    href={feature.url} target="_blank"
                                                    className="mt-4 inline-flex justify-center items-center px-5 py-2 dark:text-dark-txt border-gray-300 hover:border-gray-700 border text-base font-gilroy-medium rounded-full shadow-sm text-black  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
                                                >
                                                    Ver Sitio
                                                </a>
                                                <ul role="list" className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
                                                    <span className="text-gray-700 font-gilroy-semibold">Tech Stack</span>
                                                    {feature && feature.tech_stack && feature.tech_stack.map(stack => (
                                                        <><li>• {stack.name}</li></>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="lg:col-span-7">
                                                <div className="aspect-w-2 aspect-h-1 rounded-lg bg-gray-100 overflow-hidden sm:aspect-w-5 sm:aspect-h-2">
                                                    <img src={feature.imageSrc} alt={feature.imageAlt} className="object-center object-cover" />
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Tab.Panel>
                            ))}
                        </Tab.Panels>
                    </Tab.Group>
                </div>
            </section>

            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                    <div>
                        <h2 className="text-3xl font-gilroy-black text-gray-900 sm:text-4xl">
                            Servicios de Software
                        </h2>
                        <p className="mt-3 max-w-3xl text-lg text-gray-500 font-gilroy-regular">
                            Ofrecemos servicios de creacion de paginas web y plataformas de ecommerce.
                        </p>
                        <div className="mt-8 sm:flex">
                            <div className="">
                                <Link
                                    to="/servicios"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    Servicios
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                    to="/contacto"
                                    className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-blue-100 hover:bg-blue-200"
                                >
                                    Contactanos
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                alt="Workcation"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg"
                                alt="Laravel"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                alt="StaticKit"
                            />
                        </div>
                        <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
                            <img
                                className="max-h-12"
                                src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg"
                                alt="Statamic"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, {

})(About)
