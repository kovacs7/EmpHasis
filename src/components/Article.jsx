const Article = () => {
  return (
    <article className="flex bg-white transition hover:shadow-xl rounded-md border-2 border-indigo-300">
              <div className="flex flex-1 flex-col justify-between">
                <div className="block ">
                  <img
                    alt=""
                    src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                    className="aspect-video object-cover rounded-t-md"
                  />
                </div>
                <a
                  href="#"
                  className="relative block overflow-hidden p-4 sm:p-6 lg:p-8"
                >
                  

                  <div className="sm:flex sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                        Building a SaaS product as a software developer
                      </h3>

                      <p className="mt-1 text-xs font-medium text-gray-600">
                        By John Doe
                      </p>
                    </div>

                    <div className="hidden sm:block sm:shrink-0">
                      <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="size-16 rounded-lg object-cover shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1">
                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      Snippet
                    </span>

                    <span className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">
                      JavaScript
                    </span>
                  </div>

                  <div className="mt-4">
                    <p className="text-pretty text-sm text-gray-500 line-clamp-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      At velit illum provident a, ipsa maiores deleniti
                      consectetur nobis et eaque. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      At velit illum provident a, ipsa maiores deleniti
                      consectetur nobis et eaque.
                    </p>
                  </div>

                  <dl className="mt-6 flex gap-4 sm:gap-6">
                    <div className="flex flex-col-reverse">
                      <dt className="text-sm font-medium text-gray-600">
                        Last edited
                      </dt>
                      <dd className="text-xs text-gray-500">31st June, 2021</dd>
                    </div>

                    <div className="flex flex-col-reverse">
                      <dt className="text-sm font-medium text-gray-600">
                        Reading time
                      </dt>
                      <dd className="text-xs text-gray-500">3 minute</dd>
                    </div>
                  </dl>
                </a>
              </div>
            </article>
  )
}

export default Article