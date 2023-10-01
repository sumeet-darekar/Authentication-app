export default function userprofile({params}: any){
    return (
        <div className="items-center flex justify-center min-h-screen flex-col py-2 bg-black">
            <h1 className="text-white">Hi {params.id}</h1>
        </div>
    );
}