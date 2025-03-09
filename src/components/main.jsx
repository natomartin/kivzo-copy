import '../App.css';

function HomeHeader({date, title}){
    return (
        <div className='home-header'>
            <label>{date}</label>
            <a>{title}</a>
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
        </div>
    )
}