const Posts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: 'force-cache'});
    const posts = await response.json()
    console.log(posts)

    return (
        <div className="container m-auto flex flex-col my-10">

            <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">POSTS</h2>
            <ul className="max-w-md text-left space-y-4 text-gray-500   dark:text-gray-400">
                {
                    posts.map(item => (
                        <li key={item.id} className="flex items-center space-x-3 rtl:space-x-reverse">
                            <svg className="shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                            </svg>
                            <span className="font-semibold text-gray-900 ">{item.title}</span>
                        </li>
                    ))
                }
            </ul>








        </div>
    )
}

export default Posts;