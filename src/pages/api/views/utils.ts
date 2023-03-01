import { queryBuilder } from "@/lib/planetscale";

const TABLE_NAME = 'blogPosts';

const getAll = async () => {
    const data = await queryBuilder
        .selectFrom(TABLE_NAME)
        .selectAll()
        .execute();

    return data;
}

//todo: generate a type
const getSpecificFields = async ({ key = null, operator = null, value = null, fields}) => {
    let data;
    if (key === null) {
        data = await queryBuilder
            .selectFrom(TABLE_NAME)
            .select(fields)
            .execute();
    } else {
        data = await queryBuilder
            .selectFrom(TABLE_NAME)
            .select(fields)
            .where(key, operator, value)
            .execute();
    }

    return data;
}

const getBlogPostById = async (id: number) => {
    const data = await queryBuilder
        .selectFrom(TABLE_NAME)
        .selectAll()
        .where('id', '=', id)
        .execute();

    return data;
}

const getBlogPostBySlug = async (slug: string) => {
    const data = await queryBuilder
        .selectFrom(TABLE_NAME)
        .selectAll()
        .where('slug', '=', slug)
        .execute();

    return data;
}

//todo: add type
const insertBlogPost = async (post) => {
    const data = await queryBuilder
        .insertInto(TABLE_NAME)
        .values({ ...post })
        .onDuplicateKeyUpdate({ views: post.views + 1 })
        .execute();

    return data;
}

//todo: add type
const updateBlogPost = async (post) => {
    const {id, fields} = post;
    const data = await queryBuilder
        .updateTable(TABLE_NAME)
        .set({...fields})
        .where('id', '=', id)
        .execute();

    return data;
}

const deleteBlogPost = async (id: number) => {
    const data = await queryBuilder
        .deleteFrom(TABLE_NAME)
        .where('id', '=', id)
        .execute();
    
    return data;
}

export {
    getAll,
    getSpecificFields,
    getBlogPostById,
    getBlogPostBySlug,
    insertBlogPost,
    updateBlogPost,
    deleteBlogPost
}