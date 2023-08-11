import React from 'react'

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

]
const ConversationSection = () => {
    return (

        <div class='ml-[15vh] w-1/3  relative bottom-[6vh] '>
            <div className='flex-col text-2xl w-1/6   text-dimBlack'>
                <p>Conversation</p>
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
    );
};


export default ConversationSection