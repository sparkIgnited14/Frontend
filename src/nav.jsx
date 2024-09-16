import './nav.css'



export default function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-md bg-body-light border-bottom sticky-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><i class="fa-solid fa-fire-flame-curved"></i></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {/* <div class="navbar-nav ms-auto">
                            <form class="d-flex" role="search">
                                <input class="form-control me-2 search-inp" type="search" placeholder="Search Destinations" ></input>
                                <button class="btn search-btn" type="submit"><i class="fa-solid fa-magnifying-glass"></i>Search</button>
                            </form>
                     </div> */}
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/">Explore</a>
                        </div>
                        <div class="navbar-nav ms-auto">
                            <a class="nav-link btn-bg mr" href="/"><i class="fa-solid fa-house"></i> Home</a> 
                            <a class="nav-link btn-bg mr" href="/events"><b><i class="fa-regular fa-calendar"></i> Events</b></a>
                            <a class="nav-link btn-bg mr" href="/gallery"><b><i class="fa-regular fa-images"></i> Gallery</b> </a>
                            <a class="nav-link btn-bg mr" href="/team"><b><i class="fa-solid fa-people-group"></i> Team</b></a>
                         </div>
                        <div class="navbar-nav ms-auto">
                          
                            <a class="nav-link btn-bg" href="/feedback"><b><i class="fa-solid fa-clipboard-question"></i> Query</b></a>
                            <a class="nav-link btn-bg" href="/contact"><b><i class="fa-solid fa-phone"></i> Contact Us</b></a>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}


