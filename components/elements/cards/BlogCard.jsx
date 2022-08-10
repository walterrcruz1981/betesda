import styled from 'styled-components'

function BlogCard(props) {
    const hero = props.blogContent
    return (
        <Card className='flex'>
            <img src={hero.imageUrl} alt={hero.title} />
            <div className='title'>{hero.title}</div>
            <div className='description'>{hero.description}</div>
        </Card>

    )
}

const Card = styled.div`
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    row-gap: 2em;
    padding: 2em 1em;
    .title {
        font-size: 3rem;
        color: #000000c7;
    }
    .description {
        font-size: 1.1rem;
        letter-spacing: 1px;
        color: #000000c7;
    }
    img {
        width: 100%;
        height: 20em;
        object-fit: cover;
    }
`;

export default BlogCard