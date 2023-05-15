'use client'

import Confetti from 'react-confetti';


const Success = () => {

    return (
        <main className='flex items-center justify-center w-full'>
            <div className="bg-white rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
                <h1 className="text-3xl pb-4 font-latoBold">
                    Thanks for the email {/*router.query.name*/} ✨
                </h1>
                <p className="text-lg  text-gray-500">
                    We have sent you an email over at { /*router.query.email*/}. We will get
                    back to you as soon as we can!
                </p>
            </div>

            <Confetti gravity={0.2} numberOfPieces={200} />

        </main>
    )
}

export default Success