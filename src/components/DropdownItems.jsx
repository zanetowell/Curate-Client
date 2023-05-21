import { logout } from "../services/firebase"

const DropdownItems = [
    {
        title: 'Profile',
        path: '/'
    }, 
    {
        title: 'Dashboard',
        path:'/topics'
    },
    {
        title: 'Archives',
        path: '/'
    },
    {
        title: 'Logout',
        onclick: {logout}
    }
]

export default DropdownItems