import { useEffect } from "react"
import { connect } from "react-redux"
import { get_categories } from "redux/actions/categories"
import { Link } from "react-router-dom"
import LoadingCard from "components/loaders/LoadingCard"

function BlogCategories({ get_categories, categories }) {

    useEffect(() => {
        get_categories()
    }, [get_categories])

    return (
        <>
            
            <div className="bg-white">
                <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8 ">
                    <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
                        <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">All Categories</h2>
                        {/*                     <Link to="/blog/categories" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </Link> */}
                    </div>

                    <div className="mt-4 flow-root">
                        <div className="-my-2">
                            <div className="box-content py-2 relative h-80 overflow-x-auto xl:overflow-visible">
                                <div className="absolute min-w-screen-2xl px-4 flex flex-col  sm:px-4 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid-cols-5 xl:gap-8 sm:gap-8 lg:grid-cols-4 md:gap-8 md:grid-cols-3 lg:gap-8 sm:grid">

                                    {
                                        categories ?
                                            categories.map(category => (
                                                <Link
                                                    to={`/blog/categories/${category.id}`}
                                                    className="relative w-56 h-80 rounded-lg p-6 flex flex-col overflow-hidden hover:opacity-75 xl:w-auto"
                                                >
                                                    <span aria-hidden="true" className="absolute inset-0">
                                                        <img src={category.thumbnail} alt={category.name} className="w-full h-full object-center object-cover" />
                                                    </span>
                                                    <span
                                                        aria-hidden="true"
                                                        className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                                                    />
                                                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.name}</span>
                                                </Link>
                                            ))
                                            
                                            :
                                            <LoadingCard />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mt-6 px-4 sm:hidden">
                    <Link to="/blog/categories" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
                        Browse all categories<span aria-hidden="true"> &rarr;</span>
                    </Link>
                </div> */}
                </div>
            </div>

        </>

    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories
})
export default connect(mapStateToProps, {
    get_categories
})(BlogCategories)