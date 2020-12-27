export default function skills() {
    const skillsElem = document.querySelectorAll('.skills__item');

    skillsElem.forEach((item) => {
        item.querySelector('.skills__item-scale').style.width = item.querySelector('.skills__item-percents').innerHTML;
    });
}
