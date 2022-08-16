import Image from 'next/image'

import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { ArrowUpIcon, CloudDownloadIcon, PlayIcon } from '@heroicons/react/solid'

const navigation = [
    { name: 'Product', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Marketplace', href: '#' },
    { name: 'Company', href: '#' },
]

export default function Hero() {
    return (
        <div className="relative bg-gradiente overflow-hidden">
            <main className="container flex flex-col md:flex-row gap-y-5 justify-between items-center mx-auto my-9">
                <div className="w-full lg:w-2/4 xl:w-1/2 tracking-tight">
                    <div className="text-white space-y-6">
                        <h1 className="text-white text-4xl xl:text-5xl font-medium">Melhor maneira de se conectar com os clientes</h1>
                        <p className="leading-8 text-xl">
                            Procrastina holística convergência missionária-crítica com atendimento ao cliente confiável.O compartilhamento de idéias assertivamente decepcionalmente para soluções impactantes.
                        </p>
                        <div className="action-btns flex flex-col sm:flex-row gap-4">
                            <a href="#" className="rounded-full text-sm whitespace-nowrap text-white bg-teal-600 text-center p-4">
                                Baixe Agora
                                <CloudDownloadIcon className='ml-2 w-4 inline-block' />
                            </a>
                            <a href="https://www.youtube.com/watch?v=1APwq1df6Mw" className="rounded-full text-sm whitespace-nowrap">
                                <PlayIcon className='text-teal-500 font-extrabold text-xl bg-white rounded-full w-12 h-12 inline-block' />
                                <span className="pl-2">
                                    Assista agora
                                </span>
                            </a>
                        </div>
                        <div className="flex flex-wrap gap-x-4">
                            <div className="flex-auto">
                                <div className="flex items-center py-3 justify-around">
                                    <div className="single-counter-item">
                                        <span className="text-2xl font-bold text-white">672,086</span>
                                        <h6 className="text-white text-sm">Total Install</h6>
                                    </div>
                                    <span className="color-6 ml-1 p-2 rounded-circle">
                                        <ArrowUpIcon className='h-5 w-5' />
                                    </span>
                                </div>
                            </div>
                            <div className="flex-auto">
                                <div className="flex items-center py-3 justify-around">
                                    <div className="single-counter-item">
                                        <span className="text-2xl font-bold text-white">143,870</span>
                                        <h6 className="text-white text-sm">Total Download</h6>
                                    </div>
                                    <span className="color-6 ml-1 p-2 rounded-circle">
                                        <ArrowUpIcon className='h-5 w-5' />
                                    </span>
                                </div>
                            </div>
                            {/* <div className="flex-auto">
                                <div className="flex items-center py-3 justify-around">
                                    <div className="single-counter-item">
                                        <span className="text-2xl font-bold text-white">31,191</span>
                                        <h6 className="text-white text-sm">Active Users</h6>
                                    </div>
                                    <span className="color-6 ml-1 p-2 rounded-circle">
                                        <ArrowUpIcon className='h-5 w-5' />
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
                <div className="w-full px-10 sm:p-0 lg:w-2/5 xl:w-1/2 text-center">
                    <Image
                        height={613}
                        width={407}
                        src="/app-mobile-image.png"
                        alt="app image"
                        className="img-fluid"
                    />
                </div>
            </main>
            <div className="bottom-0 h-32 -mt-10 bg-image3"></div>
        </div>
    )
}
