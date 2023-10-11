export default function UserProfile({params}: any) {
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <p className="text-2xl">
                Profile Page 
                <span className="p-2 rounded ml-2 bg-cyan-500 text-black">
                    {params.id}
                </span>
            </p>
        </div>
    )
}