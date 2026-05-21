
export default function DineCard({RestData}){

    return(
        <div className="max-w-sm flex-none">
            <div className="relative">
                <img className="w-80 h-50 object-cover rounded-2xl" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+RestData?.info?.mediaFiles[0]?.url}></img>
                <p className="absolute bottom-2 left-2 text-xl text-white">{RestData.info.name}</p>
                <p className="absolute bottom-2 right-2 text-xl text-white">{RestData?.info?.rating?.value}</p>
            </div>
        </div>
    )
}