import '../App.css';

function HomeHeader({date, title}){
    return (
        <div className='home-header'>
            <label>{date}</label>
            <a>{title}</a>
        </div>
    )
}

function CommentsAditionals({name, isObligatory}){
    function getIsObligatory(){
        return isObligatory ? <span style={{color: 'orangered'}}> *</span> : ''
    }
    return(
        <div className='comments-aditionals'>
            <label>{name}{getIsObligatory()}</label>
            <input></input>
        </div>
    )
}

function Comments(){
    return(
        <div className='comments'>
            <h3>Leave a Reply</h3>
            <p>Your email address will not be published. Required fields are marked</p>
            <p>Comment</p>
            <textarea></textarea>
            <div className='comments-wrapper'>
                <CommentsAditionals name='Name' isObligatory={true}/>
                <CommentsAditionals name='Email' isObligatory={true}/>
                <CommentsAditionals name='Website' />
            </div> 
            <div className='comments-checkbox'>
                <input type="checkbox" />
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
            </div>
        </div>
    )
}

export function Main(){
    return (
        <div className='main'>
            <h2>HOME</h2>
                <div className='titles'>
                    <HomeHeader date='2021-09-01' title='Welcome to Kivzo Blogs' />
                    <HomeHeader date='2021-09-02' title='Kivzo Blogs is a blog site' />
                    <HomeHeader date='2021-09-03' title='Kivzo Blogs is a blog site. Kivzo Blogs is a blog site' />
                    <HomeHeader date='2021-09-04' title='Welcome to Kivzo Blogs' /> 
                    <HomeHeader date='2021-09-05' title='Welcome to Kivzo Blogs. Welcome to Kivzo Blogs' />
                    <HomeHeader date='2021-09-06' title='Kivzo Blogs is a blog site' />
                    <HomeHeader date='2024-09-07' title='Kivzo Blogs is a blog site' />
                </div>
            <div className='button-wrapper'>
                <a className='button-view-all' href=''>View All</a>
            </div>
            <div className='comments-section'>
                <Comments />
            </div>

        </div>
    )
}