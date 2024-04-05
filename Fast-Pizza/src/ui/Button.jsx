

function Button({children, disabled}) {
    return (
        <button disabled={disabled} className='bg-yellow-400 inline-block px-4 py-3 font-semibold tracking-wide rounded-full uppercase hover:bg-yellow-300 text-stone-800 duration-500 transition-colors focus:outline-none focus:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4'>
            {children}
        </button>
    )
}

export default Button
