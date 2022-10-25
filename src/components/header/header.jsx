const Header = ({selectedTeam, memberCount}) => {
    return (
        <header>
            <h1>Active Team: {selectedTeam}</h1>
            <h1># of Members: {memberCount}</h1>
        </header>
    )
}

export default Header;