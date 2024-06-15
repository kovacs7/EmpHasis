import Article from "./Article";

const BlogIndex = () => {
  return (
    <>
      <section className="text-gray-800">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Article />
            <Article />
            <Article />
          </div>
        </div>
        <div className="flex mx-auto justify-center max-w-7xl mb-4">
          <button
            type="button"
            className="px-2 py-1 text-sm rounded-md hover:underline border border-indigo-500 text-indigo-600"
          >
            Load more posts...
          </button>
        </div>
      </section>
    </>
  );
};

export default BlogIndex;
