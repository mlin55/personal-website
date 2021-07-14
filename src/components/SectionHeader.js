function SectionHeader({title, image}) {
    return(
            <div className='section-header-container' style={{backgroundImage: `url(${image})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
                <div className='section-header-overlay'>
                    <h1  style={{color: 'white', fontSize: '2rem'}}>{title}</h1>
                </div>
            </div>
    )
}

export default SectionHeader;