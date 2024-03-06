function regenerate() {
    let numba = Math.floor(Math.random() * 18) + 1;
    let imgMain = document.getElementById("imgMain");

    let dicaption = ["1", "2", "Fugitive", "3", "4", "5", "6", "7", "8", "War", "9", "10", "Meta-Crisis", "11", "12", "13", "14", "15"];

    let dimages = [
        "https://cms.doctorwho.tv/sites/default/files/2022-03/1st%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/2nd%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-04/DWTV-CharacterHeader-FugitiveDoctor2.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/3rd%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/4th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/5th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/6th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/7th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/8th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/War%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/9th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/10th%20Doctor%20-%201920x1080.jpg",
        "https://www.basicstuffmagazine.com/wp-content/uploads/2019/07/doctor_who_2005_s04e13_1080p_bluray_x264-shortbrehd_1745.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/11th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/12th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv/sites/default/files/2022-03/13th%20Doctor%20-%201920x1080.jpg",
        "https://cms.doctorwho.tv//sites/default/files/2022-11/Header-images-Fourteenth_Doctor-f6f35a6750.jpg",
        "https://www.dexerto.com/cdn-cgi/image/width=750,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/12/13/Doctor_Who_Fifteenth_Doctor_Ncuti_Gatwa_promo_still.jpg"
    ];

    console.log(dicaption[numba] + ": " + dimages[numba]);
    imgMain.src = dimages[numba];
    imgMain.alt = dicaption[numba];
}
