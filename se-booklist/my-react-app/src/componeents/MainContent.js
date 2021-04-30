import React from 'react'

function MainContent() {
    return(
        <main>
            <div className="main_head">
                <form className="search-box">
                    <input 
                    type="search"
                    placeholder="Search for a book..."
                    required
                    />
                </form>
            </div>

        </main>
    )
}

export default MainContent