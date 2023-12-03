import {
  IoIosSearch,
  IoMdTrendingUp,
  FaRegUser,
  IoIosAddCircleOutline,
} from "../icons";
export default function Post() {
  return (
    // wrapper
    <div className="w-full   flex md:flex-row flex-col-reverse justify-between items-center   bg-[#272727]">
      {/* nav bar */}
      <div className="md:w-[6%] z-10  flex fixed  backdrop-blur-2xl md:backdrop-blur-0 bottom-1   w-[90%] md:h-screen h-[20px] md:border-r-2 border-2 md:border-0 border-[#6EEB83] text-white  md:flex-col flex-row items-center justify-between py-10 px-2 ">
        {/* logo */}
        <div className="w-full md:inline-block hidden">
          <img
            src="https://ik.imagekit.io/8fgpvoiai/artinest/artinest-logo_zEoxudr28k.png?updatedAt=1701426547541itial-scale=1.0"
            alt="artinest-logo"
          />
        </div>

        {/* profile icon and nav content*/}
        <ul className="w-full flex md:pr-0 pr-5  md:flex-col flex-row md:justify-center justify-evenly items-center md:gap-6 gap-2 ">
          <li className="w-full flex justify-center items-center">
            <FaRegUser className="text-[#6EEB83] md:text-6xl text-5xl " />
          </li>
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosSearch className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>search</h3>
          </li>
          <li className="w-full flex flex-col justify-center items-center">
            <IoMdTrendingUp className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>trending</h3>
          </li>
        </ul>

        {/* create  */}
        <ul className="md:w-full w-[30%] md:pr-0 pr-5">
          <li className="w-full  flex flex-col justify-center items-center">
            <IoIosAddCircleOutline className="text-[#6EEB83] text-4xl font-bold" />
            <h3 style={{ fontFamily: "Lexend Deca, sans-serif" }}>create</h3>
          </li>
        </ul>
      </div>

      {/* content */}
      <div className="w-[90%] md:pl-52   text-white flex flex-col md:justify-start  md:items-start items-center  h-full md:py-14 py-4 pb-20 md:pb-0 md:gap-10 gap-8">
        {/* meta data and title */}
        <div className="flex flex-col justify-center md:items-start items-center gap-2">
          <h1
            className="text-[#6EEB83] text-4xl text-center md:text-start"
            style={{ fontFamily: "DM Serif Display, sans-serif" }}
          >
            15 Disadvantages Of Freedom And How You Can Workaround It.
          </h1>

          {/* metadata */}
          <div style={{ fontFamily: "Lexend Deca, sans-serif" }}>
            <h3 className="text-[#A5A5A5] text-center md:text-start">written by @lokesh293</h3>
            <h3 className="text-[#A5A5A5] text-center md:text-start">on 27 may 2022</h3>
          </div>
        </div>

        {/* blog content */}
        <div className="w-full h-auto pb-6 md:text-start text-center ">
          <h4 style={{ fontFamily: "Lexend Deca, sans-serif" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, quia?
            Qui et nam sequi! Natus nisi, error necessitatibus soluta, officia
            qui rem ipsa impedit praesentium culpa delectus dolorem laudantium!
            Atque dolorum explicabo veritatis, nesciunt id tempore eaque, quis
            qui inventore commodi praesentium quod nobis aperiam. Autem aut esse
            dolore aperiam nemo voluptate tempore earum quia suscipit accusamus?
            Corrupti, quisquam.
            <br /> <br /> Quaerat qui sed alias nesciunt sapiente dolorem
            deleniti consequatur, harum quibusdam neque provident autem
            laboriosam, dolore beatae facere eius recusandae temporibus. Maxime
            explicabo optio vitae dicta, corrupti, dolorum quis error
            consectetur aliquam quidem ea quo veritatis atque officiis fugiat!
            Assumenda, sint. Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Soluta repellendus odit laborum excepturi eveniet distinctio
            quod neque nulla, possimus, laboriosam a repellat tempora
            perspiciatis aliquam, nisi totam minus deserunt nesciunt.
            Repudiandae harum quidem ducimus dolores, consequatur qui fugit rem
            culpa illo soluta, sequi delectus rerum! Tenetur, quasi
            exercitationem? Minus tempore ratione ut fugiat voluptate ad beatae
            eveniet qui reiciendis possimus earum, iure molestiae quasi commodi
            ipsam iusto consectetur voluptatibus ipsa eaque dicta? Obcaecati
            molestias nostrum eaque nobis aliquid ex praesentium libero magnam
            eligendi ratione perferendis, temporibus voluptate dolor eius
            impedit, sit dolores repellendus minus doloribus.
          </h4>

          <img  className="float-left w-[500px] m-4 ml-0" src="https://plus.unsplash.com/premium_photo-1701127871438-af582cdd8c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <h4>Tempora, quasi! Quod debitis assumenda quis at
            suscipit nulla, modi sunt sapiente. Consectetur numquam cupiditate
            mollitia aut asperiores consequatur, fugit odio vitae deserunt velit
            similique ullam saepe tempore officiis quaerat in nemo itaque
            voluptatibus autem soluta expedita amet optio reprehenderit. Non
            deleniti autem doloribus quaerat voluptatum voluptas maiores eos
            officia adipisci itaque consequuntur, odio alias maxime quod nisi
            quisquam necessitatibus numquam culpa.
            <br /> <br /> Omnis maxime id explicabo quisquam quod, eligendi
            minima voluptatibus eaque ipsa? Eos, id! Itaque laborum beatae
            neque, hic esse incidunt accusantium perspiciatis ipsa suscipit
            asperiores dolorum sequi debitis repellendus ipsum, odio nulla!
            Repellat, asperiores recusandae sed a, quidem modi beatae,
            architecto labore eos est libero excepturi deserunt animi iure at
            quo ullam quam amet fugit ut inventore. Asperiores molestiae fugit
            laborum quia totam quis quae placeat.</h4>

          <img
            className="float-right w-[500px] m-4 mr-0"
            src="https://images.unsplash.com/photo-1701122651126-612199155676?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />

          <h4>
            Velit qui quos excepturi magnam recusandae optio laudantium, iusto
            neque, doloremque deserunt eaque vel natus aliquam consequuntur
            necessitatibus illo voluptas unde vero aperiam? Amet praesentium
            voluptatem neque quisquam officia dolorum ratione optio corporis
            illum eos. Soluta quasi natus ipsam dolore sit nemo non id veniam
            molestias quos ratione perspiciatis consectetur vitae sequi facere
            deserunt tempore architecto, blanditiis facilis. <br /> <br />
            Expedita alias facilis quia cumque quibusdam voluptatibus,
            accusantium sed consectetur nulla corrupti iste ipsa, esse corporis
            cum, quod ad nihil repudiandae officia itaque? Sint soluta nihil
            sapiente maiores commodi aut veniam corporis dolorem, repudiandae
            voluptatibus itaque facere sed dolore quidem eligendi praesentium
            accusamus asperiores, nemo et officiis quisquam aliquid, explicabo
            mollitia. Veritatis architecto, dolorum quasi maxime optio harum nam
            ab, inventore id natus iusto minus laboriosam dolorem deserunt.
            Minima obcaecati asperiores incidunt veniam? Provident sed
            voluptatum repudiandae laborum in laudantium quae corrupti
            consectetur, aspernatur eum veritatis vel molestiae omnis natus
            earum atque ipsam temporibus quo suscipit, totam neque, voluptate
            labore! Harum animi autem nihil, necessitatibus velit, expedita esse
            facere exercitationem, ullam rem quas veritatis laboriosam obcaecati
            dolor. Minus quam et sit consectetur modi architecto porro magni
            similique doloribus quis. Quae ab, odit, culpa architecto soluta
            libero nobis dolorem impedit sapiente possimus illo? Delectus
            aliquam, non unde facilis ut voluptatum quod dolor perferendis?{" "}
            <br /> <br /> Est dicta, libero laboriosam officiis facilis,
            consectetur numquam, magnam voluptatum adipisci distinctio quae qui.
            Consequatur magni possimus, ipsam eaque minus quia pariatur nobis
            nemo adipisci expedita voluptatem distinctio repellendus, nisi
            excepturi reiciendis quibusdam accusamus. Rerum omnis obcaecati amet
            ducimus non nulla molestiae inventore eveniet necessitatibus
            quibusdam maxime quos et dolorem nisi ratione, perspiciatis placeat
            soluta accusamus? Ipsum necessitatibus explicabo magni ad iusto illo
            sequi tempore autem aliquam!
          </h4>
        </div>
      </div>
    </div>
  );
}
