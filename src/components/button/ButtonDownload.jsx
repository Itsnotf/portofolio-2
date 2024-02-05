import { GoDownload } from "react-icons/go";
import axios from "axios";


export default function ButtonDownload() {
    // const handleDownloadClick = (url) => {
    //     const fileName = url.split('/').pop();
    //     const aTag = document.createElement('a');
    //     aTag.href = url;
    //     aTag.setAttribute('download', fileName);
    //     document.body.appendChild(aTag);
    //     aTag.click();
    //     document.body.removeChild(aTag);
    // };

    const handleDownload = async () => {
        const response = await fetch('/api/pdf');
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'Download.pdf';
        link.click();
        window.URL.revokeObjectURL(url);
    };



    return (
        <button
            className="md:w-[345px] w-[232px] md:h-[60px] h-[50px] rounded-[10px] flex flex-row bg-putih2 items-center justify-evenly text-pink font-bold mt-[50px] transition-all ease-in duration-200 hover:transition-all hover:ease-in hover:duration-200 hover:text-putih2 hover:bg-pink"
            onClick={handleDownload}
        >
            <div className="md:text-[20px] text-[16px]">Download Portfolio </div>
            <GoDownload className="text-[24px]" />
        </button>
    );
}
