/** @jsx jsx */
import { jsx, Heading, Link as TLink } from "theme-ui"
import { Link } from "gatsby"
import { Flex } from "@theme-ui/components"
import Layout from "./layout"
import Listing from "./listing"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import replaceSlashes from "../utils/replaceSlashes"
import SEO from "./seo"
import BlogTop from "../assets/pictures/blog_top.svg";
import Hero from "../texts/hero"

type PostsProps = {
  posts: {
    slug: string
    title: string
    date: string
    excerpt: string
    description: string
    timeToRead?: number
    tags?: {
      name: string
      slug: string
    }[]
  }[]
  [key: string]: any
}

const Blog = ({ posts }: PostsProps) => {
  const { tagsPath, basePath } = useMinimalBlogConfig()

  return (
    <Layout>
      {/* <div className="home-inner__start">
          <section sx={{ mb: [7], p: { fontSize: [1, 2, 3], mt: 2 }, variant: `section_hero` }}>
            <Hero />
          </section>
          <img src={BlogTop} id="bg" alt="" /> 
        </div> */}
      <SEO title="Blog" />
      <Flex sx={{ alignItems: `center`, justifyContent: `space-between`, flexFlow: `wrap` }}>
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          Blog
        </Heading>
        <TLink
          as={Link}
          sx={{ variant: `links.secondary`, marginY: 2 }}
          to={replaceSlashes(`/${basePath}/${tagsPath}`)}
        >
          View by people
        </TLink>
      </Flex>
      <Listing posts={posts} sx={{ mt: [4, 5] }} />
    </Layout>
  )
}

export default Blog
