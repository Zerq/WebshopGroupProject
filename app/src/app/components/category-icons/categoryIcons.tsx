import Image from "next/image";
import styles from "./categoryIcons.module.css";

export function ShowCampaingCategories(){
    return (
        <ul className={styles.categoryList}>
          <li className={styles.home} data-categories={'furniture'} data-catagory-group={'home'}>
            <Image
              className={styles.product}
              src={'/9165796_sofa_furniture_icon.svg'}
              width={580}
              height={580}
              alt={`Bild på möbler`}
            />
            <p className={styles.category}>Möbler</p>
          </li>
          <li className={styles.home} data-categories={'home-decoration'} data-catagory-group={'home'}>
            <Image
              className={styles.product}
              src={'/living-room.png'}
              width={380}
              height={380}
              alt={`Bild på hemdekoration`}
            />
            <p className={styles.category}>Hemdekoration</p>
          </li>
          <li className={styles.home} data-categories={'kitchen-accessories'} data-catagory-group={'home'}>
            <Image
              className={styles.product}
              src={'/rice-cooker.png'}
              width={380}
              height={380}
              alt={`Bild på köksassocearer`}
            />
            <p className={styles.kitchen_accessories}>Köksassocearer</p>
          </li>
          <li className={styles.home} data-categories={'groceries'} data-catagory-group={'home'}>
            <Image
              className={styles.product}
              src={'/food.png'}
              width={380}
              height={380}
              alt={`Bild på mat`}
            />
            <p className={styles.category}>Specerier</p>
          </li>
          <li className='tablets' data-categories={'laptops'} data-catagory-group={'computing'}>
            <Image
              className={styles.product}
              src={'/laptop.png'}
              width={380}
              height={380}
              alt={`Bild på bärbardator`}
            />
            <p className={styles.laptops}>Bärbara datorer</p>
          </li>
          <li className={styles.computing} data-categories={'tablets'} data-catagory-group={'computing'}>
            <Image
              className={styles.product}
              src={'/tablet.png'}
              width={380}
              height={380}
              alt={`Bild på en surfplatta`}
            />
            <p className={styles.category}>Surfplattor</p>
          </li>
          <li className={styles.computing} data-categories={'cell-phone'} data-catagory-group={'computing'}>
            <Image
              className={styles.product}
              src={'/cell-phone.png'}
              width={380}
              height={380}
              alt={`Bild på mobil`}
            />
            <p className={styles.category}>Mobiler</p>
          </li>
          <li className={styles.computing} data-categories={'mobile-accessories'} data-catagory-group={'computing'}>
            <Image
              className={styles.product}
              src={'/music.png'}
              width={380}
              height={380}
              alt={`Bild på mobilaccessoarer`}
            />
            <p className={styles.category}>Mobilaccessoarer</p>
          </li>
          <li className={styles.beauty} data-categories={'beauty'} data-catagory-group={'beauty'}>
            <Image
              className={styles.product}
              src={'/mascara.png'}
              width={380}
              height={380}
              alt={`Bild på skönhetsprodukter`}
            />
            <p className={styles.beauty}>Skönhetsprodukter</p>
          </li>
          <li className={styles.beauty} data-categories={'fragrances'} data-catagory-group={'beauty'}>
            <Image
              className={styles.product}
              src={'/fragrance.png'}
              width={380}
              height={380}
              alt={`Bild på parfym`}
            />
            <p className={styles.category}>Parfym</p>
          </li>
          <li className={styles.beauty} data-categories={'skin-care'} data-catagory-group={'beauty'}>
            <Image
              className={styles.product}
              src={'/skincare.png'}
              width={380}
              height={380}
              alt={`Hudvård`}
            />
            <p className={styles.category}>Hudvård</p>
          </li>
          <li className={styles.woman} data-categories={'tops'} data-catagory-group={'woman'}>
            <Image
              className={styles.product}
              src={'/dress.png'}
              width={380}
              height={380}
              alt={`Bild på topp`}
            />
            <p className={styles.category}>Toppar</p>
          </li>
          <li className={styles.woman} data-categories={'womens-dresses'} data-catagory-group={'woman'}>
            <Image
              className={styles.product}
              src={'/long-sleeves-dress.png'}
              width={380}
              height={380}
              alt={`Bild på klänningar`}
            />
            <p className={styles.category}>Klänningar</p>
          </li>
          <li className={styles.woman} data-categories={'womens-shoes'} data-catagory-group={'woman'}>
            <Image
              className={styles.product}
              src={'/high-heel.png'}
              width={380}
              height={380}
              alt={`Bild på damskor`}
            />
            <p className={styles.category}>Damskor</p>
          </li>
          <li className={styles.woman} data-categories={'womens-bags'} data-catagory-group={'woman'}>
            <Image
              className={styles.product}
              src={'/woman-bag.png'}
              width={380}
              height={380}
              alt={`Bild på damväskor`}
            />
            <p className={styles.category}>Damväskor</p>
          </li>
          <li className={styles.woman} data-categories={'womens-jewellery'} data-catagory-group={'woman'}>
            <Image
              className={styles.product}
              src={'/pearl-necklace.png'}
              width={380}
              height={380}
              alt={`Bild på damsmycken`}
            />
            <p className={styles.category}>Damsmycken</p>
          </li>
          <li className={styles.woman} data-categories={'womens-watches'} data-catagory-group={'woman'}>
            <Image
              className={styles.product}
              src={'/woman.png'}
              width={380}
              height={380}
              alt={`Bild på damklockor`}
            />
            <p className={styles.category}>Damklockor</p>
          </li>
          <li className={styles.men} data-categories={'mens-shoes'} data-catagory-group={'men'}>
            <Image
              className={styles.product}
              src={'/mens-shoes.png'}
              width={380}
              height={380}
              alt={`Bild på herrskor`}
            />
            <p className={styles.category}>Herrskor</p>
          </li>
          <li className={styles.men} data-categories={'mens-shirts'} data-catagory-group={'men'}>
            <Image
              className={styles.product}
              src={'/mens-shirt.png'}
              width={380}
              height={380}
              alt={`Bild på herrskortor`}
            />
            <p className={styles.category}>Herrskor</p>
          </li>
          <li>
            <Image
              className={styles.product}
              src={'/watch.png'}
              width={380}
              height={380}
              alt={`Bild på herrklocka`}
            />
            <p className={styles.category}>Herrklockor</p>
          </li>
          <li className='vehicle' data-categories={'motorcycle'} data-catagory-group={'vehicle'}>
            <Image
              className={styles.product}
              src={'/motorcycle.png'}
              width={380}
              height={380}
              alt={`Motorcycle`}
            />
            <p className={styles.category}>Motorcyklar</p>
          </li>
          <li className='vehicle' data-categories={'vehicle'} data-catagory-group={'vehicle'}>
            <Image
              className={styles.product}
              src={'/car.png'}
              width={380}
              height={380}
              alt={`Bild på en bil.`}
            />
            <p className={styles.category}>Bilar</p>
          </li>
          <li className='sports' data-categories={'sports-accessories'} data-catagory-group={'sports'}>
            <Image
              className={styles.product}
              src={'/hand-grip.png'}
              data-category={'sports-accessories'}
              width={380}
              height={380}
              alt={`Sportartiklar`}
            />
            <p className={styles.category}>Sportartiklar</p>
          </li>
          <li className={styles.men} data-categories={'sunglasses'} data-catagory-group={'men,woman'}>
            <Image
              className={styles.product}
              src={'/sun-glasses.png'}
              width={380}
              height={380}
              alt={`Bild på solglasögon`}
            />
            <p className={styles.category}>Solglasögon</p>
          </li>
        </ul>
    )
}