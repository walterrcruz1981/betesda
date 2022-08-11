import styled from 'styled-components'
import Image from 'next/image'

function BlogCard(props) {
    const hero = props.blogContent
    return (
        <Card className='flex'>
            <div className="image-container">
                <Image objectFit='cover' layout='fill' src={hero.imageUrl} alt={hero.title} />
            </div>
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
    .image-container {
        width: 100%;
        height: 20em;
        position: relative;
    }
`;

export default BlogCard