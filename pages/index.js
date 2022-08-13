import { CloudDownloadIcon, FolderIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Head>Testesss</Head>
      <Navbar />
      <Hero />
      <div className=''>
        <div className='container my-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mx-auto'>
          <div className='rounded-xl bg-white shadow-xl border border-gray-100 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-violet-700 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
          <div className='rounded-xl bg-white shadow-xl border border-gray-100 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-violet-700 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
          <div className='rounded-xl bg-white shadow-xl border border-gray-100 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-violet-700 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
          <div className='rounded-xl bg-white shadow-xl border border-gray-100 col-span-1 p-9 space-y-3 hover:-translate-y-3 transition-all duration-150'>
            <FolderIcon className='text-violet-700 h-10 w-10' />
            <div className='font-medium text-lg'>
              Modular
            </div>
            <div className='text-gray-700 text-sm leading-6'>
              All components are built to be used in combination.
            </div>
          </div>
        </div>
        <div className='bg-image1 relative pt-1'>
          <div className='container my-32 grid grid-cols-2 gap-8 justify-center mx-auto'>
            <div className='col-span-2 lg:col-span-1 p-10 space-y-8'>
              <div className='text-4xl font-bold text-gray-800'>
                Apdash ajuda a gerenciar tudo para você
              </div>
              <div className='text-gray-500 text-'>
                Afetam monotonectalmente os serviços eletrônicos sustentáveis com infomediários front-end.Colaborativamente em rede soluções funcionais, enquanto as iniciativas.Pontificar progressivamente o pensamento colaborativo para.                <ul className='dot-circle'>
                  <li>
                    As pessoas não estão acorrentadas a desktops ou laptops para ajudar e gravar.
                  </li>
                  <li>
                    A única maneira de o seu negócio evoluir para as informações.
                  </li>
                  <li>
                    Seu aplicativo será usado por uma série de diferentes motivos diferentes.
                  </li>
                  <li>
                    Intena intrinsecamente a experiência de primeira linha após os benefícios de colaboração.
                  </li>
                  <li>
                    Redefinir com eficiência interno ou fontes de valor agregado sem.
                  </li>
                  <li>
                    Otimize objetivamente os vetores de qualidade de back -end e para diferentes.
                  </li>

                </ul>
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1 p-10 text-center lg:text-right'>
              <Image
                alt=''
                width={350}
                height={625}
                src="https://apdash.themetags.com/assets/img/app-mobile-image-2.png"
              />
            </div>
          </div>
        </div>
        <div className='container my-32 grid grid-cols-2 gap-8 justify-center mx-auto'>
          <div className='col-span-2 lg:col-span-1 p-10 text-center lg:text-left'>
            <Image
              alt=''
              width={540}
              height={524}
              src="https://apdash.themetags.com/assets/img/about-us.png"
            />
          </div>
          <div className='col-span-2 lg:col-span-1 p-10 space-y-8'>
            <div className='text-4xl font-bold text-gray-800'>
              Apdash Help to Manage Everything for You
            </div>
            <div className='text-gray-500 space-y-8'>
              Afetam monotonectalmente os serviços eletrônicos sustentáveis com infomediários front-end.Colaborativamente em rede soluções funcionais, enquanto as iniciativas.Pontificar progressivamente o pensamento colaborativo para.              <ul className='dot-circle'>
                <li>
                  As pessoas não estão acorrentadas a desktops ou laptops para ajudar e gravar.
                </li>
                <li>
                  A única maneira de o seu negócio evoluir para as informações.
                </li>
                <li>
                  Seu aplicativo será usado por uma série de diferentes motivos diferentes.
                </li>
                <li>
                  Intena intrinsecamente a experiência de primeira linha após os benefícios de colaboração.
                </li>
                <li>
                  Redefinir com eficiência interno ou fontes de valor agregado sem.
                </li>
                <li>
                  Otimize objetivamente os vetores de qualidade de back -end e para diferentes.
                </li>
              </ul>
              <div>
                <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-fuchsia-700 text-center p-4">
                  Baixe Agora
                  <CloudDownloadIcon className='ml-2 w-4 inline-block' />
                </a>
              </div>
            </div>
          </div>
        </div>

        <section className="bg-white dark:bg-gray-900">
          <div className="container py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">explore our <br /> awesome <span className="text-blue-500">Components</span></h1>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Copy & paste components</h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  <span className="mx-1">read more</span>
                  <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>

              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Zero Configrations</h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  <span className="mx-1">read more</span>
                  <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>

              <div className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl dark:bg-gray-800">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full dark:text-white dark:bg-blue-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </span>

                <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">Simple & clean designs</h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>

                <a href="#" className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-200 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                  <span className="mx-1">read more</span>
                  <svg className="w-4 h-4 mx-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <div className='bg-indigo-800 py-20 text-white bg-image2'>
          <div className='container mx-auto text-center space-y-8 p-10'>
            <div className='text-3xl'>Download Our Apps</div>
            <p>
              Start working with that can provide everything you need to generate awareness, drive traffic, connect. Efficiently transform granular value with client-focused content. Energistically redefine market.
            </p>
            <div className='flex flex-col sm:flex-row justify-center gap-4'>
              <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-fuchsia-700 text-center p-4">
                Download Now
                <CloudDownloadIcon className='ml-2 w-4 inline-block' />
              </a>
              <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-fuchsia-700 text-center p-4">
                Download Now
                <CloudDownloadIcon className='ml-2 w-4 inline-block' />
              </a>
              <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-fuchsia-700 text-center p-4">
                Download Now
                <CloudDownloadIcon className='ml-2 w-4 inline-block' />
              </a>
            </div>
          </div>
        </div> */}


        <section className="bg-white dark:bg-gray-900">
          <div className="container flex flex-col items-center py-12 mx-auto xl:flex-row">
            <div className="flex justify-center xl:w-1/2">
              <Image width={448} height={448} class="h-80 w-80 sm:w-[28rem] sm:h-[28rem] flex-shrink-0 object-cover rounded-full" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80" alt="" />
            </div>

            <div className="flex flex-col items-center mt-6 xl:items-start xl:w-1/2 xl:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-800 xl:text-4xl dark:text-white">
                Download our free mobile app
              </h2>

              <p className="block max-w-2xl mt-4 text-xl text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto recusandae tenetur iste quaerat voluptatibus quibusdam nam repudiandae </p>

              <div className="mt-6 sm:-mx-2">
                <div className="inline-flex w-full overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2">
                  <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-600 hover:to-gray-600 sm:w-auto">
                    {/* <svg className="w-6 h-6 mx-2 fill-current" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                      <g>
                        <g>
                          <path d="M407,0H105C47.103,0,0,47.103,0,105v302c0,57.897,47.103,105,105,105h302c57.897,0,105-47.103,105-105V105
                                            C512,47.103,464.897,0,407,0z M482,407c0,41.355-33.645,75-75,75H105c-41.355,0-75-33.645-75-75V105c0-41.355,33.645-75,75-75h302
                                            c41.355,0,75,33.645,75,75V407z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M305.646,123.531c-1.729-6.45-5.865-11.842-11.648-15.18c-11.936-6.892-27.256-2.789-34.15,9.151L256,124.166
                                            l-3.848-6.665c-6.893-11.937-22.212-16.042-34.15-9.151h-0.001c-11.938,6.893-16.042,22.212-9.15,34.151l18.281,31.664
                                            L159.678,291H110.5c-13.785,0-25,11.215-25,25c0,13.785,11.215,25,25,25h189.86l-28.868-50h-54.079l85.735-148.498
                                            C306.487,136.719,307.375,129.981,305.646,123.531z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M401.5,291h-49.178l-55.907-96.834l-28.867,50l86.804,150.348c3.339,5.784,8.729,9.921,15.181,11.65
                                            c2.154,0.577,4.339,0.863,6.511,0.863c4.332,0,8.608-1.136,12.461-3.361c11.938-6.893,16.042-22.213,9.149-34.15L381.189,341
                                            H401.5c13.785,0,25-11.215,25-25C426.5,302.215,415.285,291,401.5,291z"></path>
                        </g>
                      </g>
                      <g>
                        <g>
                          <path d="M119.264,361l-4.917,8.516c-6.892,11.938-2.787,27.258,9.151,34.15c3.927,2.267,8.219,3.345,12.458,3.344
                                            c8.646,0,17.067-4.484,21.693-12.495L176.999,361H119.264z"></path>
                        </g>
                      </g>
                    </svg> */}
                    <span className="mx-2">
                      Get it on the App Store
                    </span>
                  </a>
                </div>

                <div className="inline-flex w-full mt-4 overflow-hidden rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0">
                  <a href="#" className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white transition-colors duration-150 transform sm:w-auto bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-600 hover:to-blue-600">
                    <svg className="w-6 h-6 mx-2 fill-current" viewBox="-28 0 512 512.00075" xmlns="http://www.w3.org/2000/svg"><path d="m432.320312 215.121094-361.515624-208.722656c-14.777344-8.53125-32.421876-8.53125-47.203126 0-.121093.070312-.230468.148437-.351562.21875-.210938.125-.421875.253906-.628906.390624-14.175782 8.636719-22.621094 23.59375-22.621094 40.269532v417.445312c0 17.066406 8.824219 32.347656 23.601562 40.878906 7.390626 4.265626 15.496094 6.398438 23.601563 6.398438s16.214844-2.132812 23.601563-6.398438l361.519531-208.722656c14.777343-8.53125 23.601562-23.8125 23.601562-40.878906s-8.824219-32.347656-23.605469-40.878906zm-401.941406 253.152344c-.21875-1.097657-.351562-2.273438-.351562-3.550782v-417.445312c0-2.246094.378906-4.203125.984375-5.90625l204.324219 213.121094zm43.824219-425.242188 234.21875 135.226562-52.285156 54.539063zm-6.480469 429.679688 188.410156-196.527344 54.152344 56.484375zm349.585938-201.835938-80.25 46.332031-60.125-62.714843 58.261718-60.773438 82.113282 47.40625c7.75 4.476562 8.589844 11.894531 8.589844 14.875s-.839844 10.398438-8.589844 14.875zm0 0"></path></svg>
                    <span className="mx-2">
                      Get it on Google Play
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className='py-20'>
          <div className='container mx-auto space-y-16 p-10'>
            <div className='text-center space-y-8'>
              <div className='text-4xl text-indigo-900'>Apdash Features</div>
              <p className='max-w-3xl mx-auto text-gray-500'>
                Objectively deliver professional value with diverse web-readiness. Collaboratively transition wireless customer service without goal-oriented catalysts for change. Collaboratively.
              </p>
            </div>
            <div className='grid grid-cols-3 gap-8'>
              <div className='grid space-y-4 py-14'>
                <div className='grid grid-cols-6'>
                  <div className='col-span-1'>
                    <CloudDownloadIcon className='w-12 h-12 text-indigo-900' />
                  </div>
                  <div className='col-span-5'>
                    <div className='text-xl mb-2'>
                      Responsive web design
                    </div>
                    <div className='text-gray-500'>
                      Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-6'>
                  <div className='col-span-1'>
                    <CloudDownloadIcon className='w-12 h-12 text-indigo-900' />
                  </div>
                  <div className='col-span-5'>
                    <div className='text-xl mb-2'>
                      Responsive web design
                    </div>
                    <div className='text-gray-500'>
                      Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-6'>
                  <div className='col-span-1'>
                    <CloudDownloadIcon className='w-12 h-12 text-indigo-900' />
                  </div>
                  <div className='col-span-5'>
                    <div className='text-xl mb-2'>
                      Responsive web design
                    </div>
                    <div className='text-gray-500'>
                      Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  alt=''
                  width={350}
                  height={527}
                  src="https://apdash.themetags.com/assets/img/app-mobile-image.png"
                />
              </div>
              <div className='grid space-y-4 py-14'>
                <div className='grid grid-cols-6'>
                  <div className='col-span-1'>
                    <CloudDownloadIcon className='w-12 h-12 text-indigo-900' />
                  </div>
                  <div className='col-span-5'>
                    <div className='text-xl mb-2'>
                      Responsive web design
                    </div>
                    <div className='text-gray-500'>
                      Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-6'>
                  <div className='col-span-1'>
                    <CloudDownloadIcon className='w-12 h-12 text-indigo-900' />
                  </div>
                  <div className='col-span-5'>
                    <div className='text-xl mb-2'>
                      Responsive web design
                    </div>
                    <div className='text-gray-500'>
                      Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-6'>
                  <div className='col-span-1'>
                    <CloudDownloadIcon className='w-12 h-12 text-indigo-900' />
                  </div>
                  <div className='col-span-5'>
                    <div className='text-xl mb-2'>
                      Responsive web design
                    </div>
                    <div className='text-gray-500'>
                      Modular and monetize an componente between layouts monetize array. Core competencies for testing.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50">
          <div className='container mx-auto space-y-16 p-10'>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                <span className="block">Ready to dive in?</span>
                <span className="block text-indigo-600">Start your free trial today.</span>
              </h2>
              <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Get started
                  </a>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="bg-gray-100 dark:bg-gray-900 lg:py-12 lg:flex lg:justify-center">
          <div className="container bg-white dark:bg-gray-800 lg:flex lg:shadow-lg lg:rounded-lg">
            <div className="lg:w-1/2 relative">
              <Image alt='' className="h-64 bg-cover lg:rounded-lg lg:h-full" layout="fill" src='https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80' />
              {/* <div  style="background-image:url('https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80')"></div> */}
            </div>

            <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl">Build Your New <span className="text-blue-600 dark:text-blue-400">Idea</span></h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.</p>

              <div className="mt-8">
                <a href="#" className="px-5 py-2 font-semibold text-gray-100 transition-colors duration-200 transform bg-gray-900 rounded-md hover:bg-gray-700">Start Now</a>
              </div>
            </div>
          </div>
        </section>


        <section className="bg-white dark:bg-gray-900">
          <div className="container py-12 mx-auto">
            <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">Have any Questions?</h1>

            <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
              <div className="lg:mx-12">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-white">Table of Content</h1>

                <div className="mt-4 space-y-4 lg:mt-8">
                  <a href="#" className="block text-blue-500 dark:text-blue-400 hover:underline">General</a>
                  <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Trust / Safety</a>
                  <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Services</a>
                  <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Billing</a>
                  <a href="#" className="block text-gray-500 dark:text-gray-300 hover:underline">Office Cleaning</a>
                </div>
              </div>

              <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
                <div>
                  <button className="flex items-center focus:outline-none">
                    <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path></svg>

                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">How i can play for my appoinment ?</h1>
                  </button>

                  <div className="flex mt-8 md:mx-10">
                    <span className="border border-blue-500"></span>

                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, eum quae. Harum officiis reprehenderit ex quia ducimus minima id provident molestias optio nam vel, quidem iure voluptatem, repellat et ipsa.
                    </p>
                  </div>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                  <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What can i expect at my first consultation ?</h1>
                  </button>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                  <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">What are your opening house ?</h1>
                  </button>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                  <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Do i need a referral ?</h1>
                  </button>
                </div>

                <hr className="my-8 border-gray-200 dark:border-gray-700" />

                <div>
                  <button className="flex items-center focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>

                    <h1 className="mx-4 text-xl text-gray-700 dark:text-white">Is the cost of the appoinment covered by private health insurance ?</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900">
          <div className="container py-10 mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">Our Executive Team</h1>

            <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.
            </p>

            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <Image width={128} height={128} class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">arthur melo</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">design director</p>

                <div className="flex mt-3 -mx-2">
                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Facebook">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <Image width={128} height={128} class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Amelia. Anderson</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lead Developer</p>

                <div className="flex mt-3 -mx-2">
                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Facebook">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <Image width={128} height={128} class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">Olivia Wathan</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Lead designer</p>

                <div className="flex mt-3 -mx-2">
                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Facebook">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
                <Image width={128} height={128} class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">John Doe</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">Full stack developer</p>

                <div className="flex mt-3 -mx-2">
                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.24 7.986C16.7702 7.93278 17.1655 7.47314 17.1389 6.94094C17.1122 6.40873 16.6729 5.991 16.14 5.991C16.1022 5.99191 16.0645 5.99491 16.027 6C15.71 6.03367 15.4281 6.21641 15.268 6.492L12.82 6C12.7983 5.99535 12.7762 5.993 12.754 5.993C12.6094 5.99472 12.4851 6.09583 12.454 6.237L11.706 9.71C10.3138 9.7297 8.95795 10.157 7.806 10.939C7.53601 10.6839 7.17843 10.5422 6.807 10.543ZM12.18 16.524C12.124 16.524 12.067 16.524 12.011 16.524C11.955 16.524 11.898 16.524 11.842 16.524C11.0121 16.5208 10.2054 16.2497 9.542 15.751C9.49626 15.6958 9.47445 15.6246 9.4814 15.5533C9.48834 15.482 9.52348 15.4163 9.579 15.371C9.62737 15.3318 9.68771 15.3102 9.75 15.31C9.81233 15.31 9.87275 15.3315 9.921 15.371C10.4816 15.7818 11.159 16.0022 11.854 16C11.9027 16 11.9513 16 12 16C12.059 16 12.119 16 12.178 16C12.864 16.0011 13.5329 15.7863 14.09 15.386C14.1427 15.3322 14.2147 15.302 14.29 15.302C14.3653 15.302 14.4373 15.3322 14.49 15.386C14.5985 15.4981 14.5962 15.6767 14.485 15.786V15.746C13.8213 16.2481 13.0123 16.5208 12.18 16.523V16.524ZM14.307 14.08H14.291L14.299 14.041C13.8591 14.011 13.4994 13.6789 13.4343 13.2429C13.3691 12.8068 13.6162 12.3842 14.028 12.2269C14.4399 12.0697 14.9058 12.2202 15.1478 12.5887C15.3899 12.9572 15.3429 13.4445 15.035 13.76C14.856 13.9554 14.6059 14.0707 14.341 14.08H14.306H14.307ZM9.67 14C9.11772 14 8.67 13.5523 8.67 13C8.67 12.4477 9.11772 12 9.67 12C10.2223 12 10.67 12.4477 10.67 13C10.67 13.5523 10.2223 14 9.67 14Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                    aria-label="Facebook">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z">
                      </path>
                    </svg>
                  </a>

                  <a href="#" className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z">
                      </path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white pt-20 lg:pt-[120px] pb-12 lg:pb-[90px] relative z-20 overflow-hidden">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full px-4">
                <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
                  <span className="font-semibold text-lg text-primary mb-2 block">
                    Pricing Table
                  </span>
                  <h2
                    className="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-dark
                  mb-4
                  "
                  >
                    Our Pricing Plan
                  </h2>
                  <p className="text-base text-body-color">
                    There are many variations of passages of Lorem Ipsum available
                    but the majority have suffered alteration in some form.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center -mx-4">
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
                >
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Personal
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    $59
                    <span className="text-base text-body-color font-medium">
                      / year
                    </span>
                  </h2>
                  <p
                    className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                    Perfect for using in a personal website or a client project.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      1 User
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      All UI components
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Lifetime access
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Free updates
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Use on 1 (one) project
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      3 Months support
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
                  >
                    Choose Personal
                  </a>
                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3056D3" stopOpacity="0.09" />
                            <stop
                              offset="1"
                              stopColor="#C4C4C4"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
                >
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Business
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    $199
                    <span className="text-base text-body-color font-medium">
                      / year
                    </span>
                  </h2>
                  <p
                    className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                    Perfect for using in a Business website or a client project.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      5 Users
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      All UI components
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Lifetime access
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Free updates
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Use on 3 (Three) project
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      4 Months support
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-white
                  bg-primary
                  border border-primary
                  rounded-md
                  text-center
                  p-4
                  hover:bg-opacity-90
                  transition
                  "
                  >
                    Choose Business
                  </a>
                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3056D3" stopOpacity="0.09" />
                            <stop
                              offset="1"
                              stopColor="#C4C4C4"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/3 px-4">
                <div
                  className="
               bg-white
               rounded-xl
               relative
               z-10
               overflow-hidden
               border border-primary border-opacity-20
               shadow-pricing
               py-10
               px-8
               sm:p-12
               lg:py-10 lg:px-6
               xl:p-12
               mb-10
               "
                >
                  <span className="text-primary font-semibold text-lg block mb-4">
                    Professional
                  </span>
                  <h2 className="font-bold text-dark mb-5 text-[42px]">
                    $256
                    <span className="text-base text-body-color font-medium">
                      / year
                    </span>
                  </h2>
                  <p
                    className="
                  text-base text-body-color
                  pb-8
                  mb-8
                  border-b border-[#F2F2F2]
                  "
                  >
                    Perfect for using in a Professional website or a client project.
                  </p>
                  <div className="mb-7">
                    <p className="text-base text-body-color leading-loose mb-1">
                      Unlimited Users
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      All UI components
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Lifetime access
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Free updates
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      Use on Unlimited project
                    </p>
                    <p className="text-base text-body-color leading-loose mb-1">
                      12 Months support
                    </p>
                  </div>
                  <a
                    href="javascript:void(0)"
                    className="
                  w-full
                  block
                  text-base
                  font-semibold
                  text-primary
                  bg-transparent
                  border border-[#D4DEFF]
                  rounded-md
                  text-center
                  p-4
                  hover:text-white hover:bg-primary hover:border-primary
                  transition
                  "
                  >
                    Choose Professional
                  </a>
                  <div>
                    <span className="absolute right-0 top-7 z-[-1]">
                      <svg
                        width="77"
                        height="172"
                        viewBox="0 0 77 172"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="86" cy="86" r="86" fill="url(#paint0_linear)" />
                        <defs>
                          <linearGradient
                            id="paint0_linear"
                            x1="86"
                            y1="0"
                            x2="86"
                            y2="172"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#3056D3" stopOpacity="0.09" />
                            <stop
                              offset="1"
                              stopColor="#C4C4C4"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </span>
                    <span className="absolute right-4 top-4 z-[-1]">
                      <svg
                        width="41"
                        height="89"
                        viewBox="0 0 41 89"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="38.9138"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 38.9138 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 38.9138 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 38.9138 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 38.9138 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 38.9138 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 38.9138 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 38.9138 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="38.9138"
                          cy="1.42021"
                          r="1.42021"
                          transform="rotate(180 38.9138 1.42021)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 26.4157 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 26.4157 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 26.4157 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 26.4157 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 26.4157 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 26.4157 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 26.4157 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="26.4157"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 26.4157 1.4202)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 13.9177 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 13.9177 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 13.9177 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 13.9177 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 13.9177 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 13.9177 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 13.9177 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="13.9177"
                          cy="1.42019"
                          r="1.42021"
                          transform="rotate(180 13.9177 1.42019)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="87.4849"
                          r="1.42021"
                          transform="rotate(180 1.41963 87.4849)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="74.9871"
                          r="1.42021"
                          transform="rotate(180 1.41963 74.9871)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="62.4892"
                          r="1.42021"
                          transform="rotate(180 1.41963 62.4892)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="38.3457"
                          r="1.42021"
                          transform="rotate(180 1.41963 38.3457)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="13.634"
                          r="1.42021"
                          transform="rotate(180 1.41963 13.634)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="50.2754"
                          r="1.42021"
                          transform="rotate(180 1.41963 50.2754)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="26.1319"
                          r="1.42021"
                          transform="rotate(180 1.41963 26.1319)"
                          fill="#3056D3"
                        />
                        <circle
                          cx="1.41963"
                          cy="1.4202"
                          r="1.42021"
                          transform="rotate(180 1.41963 1.4202)"
                          fill="#3056D3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <footer className="bg-white dark:bg-gray-800">
          <div className="container px-6 py-4 mx-auto">
            <div className="lg:flex">
              <div className="w-full -mx-6 lg:w-2/5">
                <div className="px-6">
                  <div>
                    <a href="#" className="text-xl font-bold text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Brand</a>
                  </div>

                  <p className="max-w-md mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>

                  <div className="flex mt-4 -mx-2">
                    <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Linkden">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M444.17,32H70.28C49.85,32,32,46.7,32,66.89V441.61C32,461.91,49.85,480,70.28,480H444.06C464.6,480,480,461.79,480,441.61V66.89C480.12,46.7,464.6,32,444.17,32ZM170.87,405.43H106.69V205.88h64.18ZM141,175.54h-.46c-20.54,0-33.84-15.29-33.84-34.43,0-19.49,13.65-34.42,34.65-34.42s33.85,14.82,34.31,34.42C175.65,160.25,162.35,175.54,141,175.54ZM405.43,405.43H341.25V296.32c0-26.14-9.34-44-32.56-44-17.74,0-28.24,12-32.91,23.69-1.75,4.2-2.22,9.92-2.22,15.76V405.43H209.38V205.88h64.18v27.77c9.34-13.3,23.93-32.44,57.88-32.44,42.13,0,74,27.77,74,87.64Z" />
                      </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Facebook">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z" />
                      </svg>
                    </a>

                    <a href="#" className="mx-2 text-gray-700 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400" aria-label="Twitter">
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                        <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 lg:mt-0 lg:flex-1">
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">About</h3>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">Blog</h3>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">Products</h3>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</a>
                    <a href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Meraki UI</a>
                  </div>

                  <div>
                    <h3 className="text-gray-700 uppercase dark:text-white">Contact</h3>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                    <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">example@email.com</span>
                  </div>
                </div>
              </div>
            </div>

            <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

            <div>
              <p className="text-center text-gray-800 dark:text-white">© Brand 2020 - All rights reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
