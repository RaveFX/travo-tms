import React from 'react'

const invitation = () => {
    const people = [
        {
            name: 'Leslie Alexander',
            email: 'leslie.alexander@example.com',
            msg: 'Hey , I need more information.........',
            imageUrl:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Michael Foster',
            email: 'michael.foster@example.com',
            msg: 'can you please.........',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Dries Vincent',
            email: 'dries.vincent@example.com',
            msg: 'when will you arrive to.........',
            imageUrl:
                'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Lindsay Walton',
            email: 'lindsay.walton@example.com',
            msg: 'Hey ,can u please.........',
            imageUrl:
                'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
            name: 'Courtney Henry',
            email: 'courtney.henry@example.com',
            msg: 'It was an amazing.........',
            imageUrl:
                'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',

        },
        {
            name: 'Tom Cook',
            email: 'tom.cook@example.com',
            msg: 'Hey , I need more information.........',
            imageUrl:
                'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    ]



    return (
        <div className='flex sm:flex-row flex-col'>
            <div className='flex flex-wrap mx-auto  '>

                <div class="m-2 p-2 mx-auto container max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" class="aspect-video w-full object-cover" alt="" />
                    <div class="p-4">
                        <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
                        <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
                        <p class="mt-1 text-gray-500">Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.</p>
                        <div class="mt-4 flex gap-2">
                            <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>

                        </div>
                    </div>
                </div>
                <div class="mx-auto container max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" class="aspect-video w-full object-cover" alt="" />
                    <div class="p-4">
                        <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
                        <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
                        <p class="mt-1 text-gray-500">Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.</p>
                        <div class="mt-4 flex gap-2">
                            <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>

                        </div>
                    </div>
                </div>
                <div class="mx-auto container max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" class="aspect-video w-full object-cover" alt="" />
                    <div class="p-4">
                        <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
                        <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
                        <p class="mt-1 text-gray-500">Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.</p>
                        <div class="mt-4 flex gap-2">
                            <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>

                        </div>
                    </div>
                </div>
                <div class="mx-auto container max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" class="aspect-video w-full object-cover" alt="" />
                    <div class="p-4">
                        <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
                        <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
                        <p class="mt-1 text-gray-500">Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.</p>
                        <div class="mt-4 flex gap-2">
                            <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>

                        </div>
                    </div>
                </div>
                <div class="mx-auto container max-w-md overflow-hidden rounded-lg bg-white shadow">
                    <img src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" class="aspect-video w-full object-cover" alt="" />
                    <div class="p-4">
                        <p class="mb-1 text-sm text-primary-500">Andrea Felsted • <time>18 Nov 2022</time></p>
                        <h3 class="text-xl font-medium text-gray-900">Migrating to Sailboat UI</h3>
                        <p class="mt-1 text-gray-500">Sailboat UI is a modern UI component library for Tailwind CSS. Get started with 150+ open source components.</p>
                        <div class="mt-4 flex gap-2">
                            <button type="button" class="text-centerfocus:outline-none text-white bg-button2 hover:bg-black transition hover:scale-75 duration-300 delay-100 rounded-full focus:ring-4 focus:ring-green font-medium text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Reject</button>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class='ml-[15vh] w-1/3   '>
                    <div className=' text-2xl w-1/6   text-dimBlack'>
                        <p>Invitation Sent to</p>
                    </div>

                    {/* Conversation Component Code */}
                    <ul role="list" className="divide-y divide-gray-100">
                        {people.map((person) => (
                            <li key={person.email} className="flex justify-between gap-x-4 py-2">
                                <div className="flex gap-x-4">
                                    <img className="h-10 w-10 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-4 text-gray-900">{person.name}</p>
                                        <p className="mt-1 truncate text-xs leading-4 text-gray-500">{person.email}</p>
                                        <p className="mt-1 truncate leading-5 text-gray">{person.msg}</p>
                                    </div>
                                </div>
                                <div className="hidden sm:flex sm:flex-col sm:items-end">


                                    <div className="mt-1 flex items-center gap-x-1.5">

                                        <p className="text-xs leading-4 text-green">Reply</p>
                                    </div>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default invitation