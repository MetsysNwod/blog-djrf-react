import LoadingCard from "components/loaders/LoadingCard";
import FullWidthLayout from "hocs/layouts/FullWidthLayout";
import { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { get_blog } from "redux/actions/blog";

function BlogPost({
    get_blog,
    post
}) {

    const params = useParams()
    const slug = params.slug

    useEffect(() => {
        get_blog(slug)
    }, [get_blog, slug])

    return (
        <FullWidthLayout>
            {
                post ?
                    <div className="relative py-16 bg-white overflow-hidden">
                        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">

                        </div>
                        <div className="relative px-4 sm:px-6 lg:px-8">
                            <div className="text-lg max-w-prose mx-auto">
                                <h1>
                                    <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
                                        {post.category.name}

                                    </span>
                                    <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                        {post.title}
                                    </span>
                                </h1>
                                
                            </div>
                            <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
                                <figure>
                                    <img className="w-full rounded-lg" src={post.thumbnail} alt="" width={1310} height={873}/>
                                    <figcaption>{post.excerpt}</figcaption>
                                </figure>

                                <p>
                                    {post.description}
                                </p>

                                <section>
                                    <video controls preload="auto" width={1310} height={873}>
                                        <source src={post.video} />
                                    </video>
                                </section>
                            </div>
                        </div>
                    </div>
                    :
                    <LoadingCard />
            }

        </FullWidthLayout>
    )
}

const mapStateToProps = state => ({
    post: state.blog.post
})

export default connect(mapStateToProps, {
    get_blog
})(BlogPost)