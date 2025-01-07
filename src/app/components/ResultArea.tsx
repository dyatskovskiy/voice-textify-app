import React from "react";

interface ResultAreaProps {
  language?: string;
  duration?: string;
  wordsQuantity?: string;
  transcription?: string;
}

export const ResultArea = ({
  language,
  duration,
  wordsQuantity,
  transcription,
}: ResultAreaProps) => {
  return (
    <>
      <div className="border-2 border-borderColor rounded-2xl overflow-x-auto relative ">
        <div className="grid grid-cols-3 h-20 sticky top-0 overflow-hidden bg-primaryBg">
          <div className="flex flex-col items-center justify-center border-r-2 border-borderColor text-borderColor">
            <p>Language:</p>
            <p className="text-globalForeground">{language}</p>
          </div>

          <div className="flex flex-col items-center justify-center border-r-2 border-borderColor text-borderColor">
            <p>Duration:</p>
            <p className="text-globalForeground">{duration}</p>
          </div>

          <div className="flex flex-col items-center justify-center text-borderColor">
            <p>Words:</p>
            <p className="text-globalForeground">{wordsQuantity}</p>
          </div>
        </div>
      </div>
      <div className="p-4 overflow-y-scroll scrollbar h-[400px]">
        <p>
          Result{transcription} Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Inventore, mollitia error. Sed commodi reiciendis
          repellat adipisci? Officia nesciunt molestiae ipsam sint, animi
          numquam quaerat nisi nihil voluptatem explicabo dolores neque
          repudiandae illo perspiciatis illum. Minima laborum non fugit cum
          dolore suscipit. Dolore, perspiciatis commodi voluptatum, suscipit
          rerum eligendi nesciunt sint ut vitae iusto beatae, amet ab. Iusto,
          adipisci expedita! Nesciunt quia laborum quae laudantium! Perferendis
          deserunt autem magnam fuga, dolore veniam alias doloribus, nesciunt,
          asperiores mollitia saepe ipsam eaque officiis ea iure tenetur.
          Quidem, voluptates incidunt ut architecto odio quia sapiente deleniti
          voluptas mollitia inventore consectetur voluptatem, facere nostrum, at
          unde. Sapiente ipsam quas incidunt magnam atque numquam voluptatibus
          quisquam recusandae animi minima officia dicta repellat delectus
          laboriosam totam reiciendis illum, minus cum dolores sunt ipsa dolor
          illo perspiciatis qui? Hic optio et dolor architecto ea magnam velit
          aut sunt eaque. Molestias animi atque debitis soluta reiciendis
          recusandae, quis natus officiis mollitia maiores nisi neque nemo nihil
          labore officia, praesentium laudantium! Cum non aut excepturi soluta
          illo ea officia itaque animi quaerat obcaecati. Quasi illum, soluta
          aut veritatis maxime alias sapiente et corrupti nulla inventore
          adipisci ullam? Sint harum eligendi obcaecati, minima autem
          voluptatibus numquam suscipit aliquid molestias impedit nam architecto
          fuga provident exercitationem perferendis quas illo iure unde.
          Assumenda accusamus commodi ratione vel, ut repudiandae eum recusandae
          amet nihil dignissimos. Iure modi laborum ut, amet tempora culpa
          veniam possimus, reprehenderit aut eius labore architecto porro? Nam
          accusantium distinctio beatae laudantium obcaecati! Officiis quae quod
          ut, optio hic iusto id beatae reprehenderit saepe perferendis amet ab
          vero fugiat veritatis quidem aliquam sunt ducimus delectus soluta
          voluptates molestias exercitationem quisquam nihil praesentium.
          Consequuntur tempore mollitia tempora explicabo nihil, quia vero natus
          neque unde, aspernatur accusantium similique deleniti iure. Harum
          distinctio temporibus similique. Dicta odio beatae modi asperiores
          similique a magnam eligendi, possimus nostrum eos aut enim velit
          tempore. Minima delectus odio officia praesentium, adipisci facere
          fugiat dolor aliquid eum ipsa illo deserunt ex necessitatibus
          reiciendis similique ratione dolores, dolore vel exercitationem alias
          magni saepe sed aut! Consectetur in expedita ipsum? Porro, excepturi
          impedit amet modi consectetur fugiat inventore delectus fuga quod
          deleniti voluptatum, cumque minima praesentium sint exercitationem
          saepe molestiae soluta animi. Repellat et nulla doloribus saepe ab
          placeat eligendi! Laborum expedita at fuga, pariatur quibusdam
          adipisci fugiat magnam repellat quisquam cupiditate perspiciatis quod
          nobis laudantium perferendis. Repellendus accusantium voluptatem
          expedita autem provident eveniet atque inventore veritatis eum saepe
          itaque ea sint distinctio facilis repudiandae in vitae, ipsum enim.
          Veritatis eos at adipisci odio! Sint, eaque aspernatur vitae quam
          natus iste debitis praesentium quas libero nesciunt repudiandae hic
          consectetur eligendi soluta provident officia magni ut qui distinctio
          nulla deserunt fugit, suscipit ab maxime. Expedita quaerat adipisci
          recusandae tenetur, reiciendis doloremque, optio magnam unde dolorum
          quas illum consequatur accusantium veniam porro vitae laborum ipsa,
          perferendis voluptas debitis distinctio ipsum mollitia. Omnis
          aspernatur adipisci asperiores eos dolore magni molestiae accusantium
          atque aliquam quam quibusdam tenetur nam, ab, quae fuga voluptatibus
          quaerat a error eaque officia magnam. Soluta ea accusantium quas quae
          architecto exercitationem tempora repudiandae quo praesentium, ullam
          repellendus ducimus maxime possimus asperiores vitae aperiam.
          Doloremque fugit quaerat adipisci, cum incidunt necessitatibus rerum
          recusandae blanditiis earum optio inventore eos libero corporis esse
          quas dolore odit sint deleniti. Assumenda, odio tempora. Sequi error
          exercitationem tempora possimus magni necessitatibus inventore quidem
          nobis iste accusantium, voluptate at molestiae maiores sunt
          perferendis laudantium iure? Eveniet a fuga ab. Quibusdam animi
          necessitatibus alias sunt magni pariatur labore. Eos vel ea quod, quis
          reprehenderit incidunt assumenda, minima soluta in dolor ut enim
          beatae. Harum beatae ratione, temporibus incidunt, dicta nisi tenetur
          recusandae placeat quia corporis dolorum maxime accusantium inventore
          odit earum quas facere itaque velit! Voluptates eos at nisi ad, quae,
          culpa, laborum tenetur accusamus porro veniam amet voluptas recusandae
          ullam nemo! Dignissimos qui aliquam, tempore sed nostrum veritatis
          nemo quas voluptas totam odit ipsa deleniti quasi incidunt temporibus
          libero quae maiores sapiente laudantium repudiandae suscipit excepturi
          voluptatibus perferendis possimus! Ab eaque perferendis unde officiis.
          Sit soluta aperiam quia ullam vero quis rem unde minima repellendus,
          nesciunt perferendis libero veritatis repellat voluptates recusandae
          id quisquam quibusdam dolorem nisi optio. Nesciunt modi sit quis
          obcaecati! Vitae voluptate culpa saepe porro nemo quam numquam esse,
          perferendis distinctio velit tempore laborum nobis assumenda ea,
          aliquid corporis minima aperiam magnam, eaque labore reiciendis
          exercitationem. Laborum magni illo quibusdam dolores facilis minima
          laboriosam beatae amet recusandae quam hic aliquam earum accusamus cum
          eaque, ab quaerat tempora. Dolorum omnis assumenda unde minus numquam
          mollitia placeat, quo eaque recusandae, voluptate doloribus ratione
          quisquam qui facere temporibus odit, nisi vero repellat nihil?
          Quisquam libero repellendus ad laborum, error veniam eos fugit in
          impedit vitae eaque sapiente est architecto numquam fuga amet pariatur
          debitis incidunt minus unde quo tempora recusandae ipsa rerum?
          Molestias, ratione? Sequi facilis explicabo fugit quidem commodi
          excepturi assumenda illum autem aperiam repudiandae ex tenetur,
          officiis dolore quam labore nemo aliquam error magni. Laboriosam totam
          commodi rem omnis voluptates ipsa architecto officiis ratione ab
          porro. Similique officiis nesciunt, aspernatur cum accusamus fugiat
          quas atque earum sit at harum reiciendis ratione dolore totam
          consequuntur commodi iusto tempore. Doloremque pariatur nam mollitia,
          laboriosam, provident iste ex debitis similique quidem veniam quasi
          ducimus? Eos exercitationem, distinctio dolorem sunt labore eius
          ducimus consequatur maiores nisi rem. Voluptates illo dolorem iure
          similique. Commodi aliquid quam eum iusto nemo sit repudiandae at
          deleniti, illum magnam voluptatibus amet odit reiciendis magni?
          Placeat aliquid porro modi saepe similique pariatur exercitationem
          delectus autem sint dolore cupiditate voluptas accusantium beatae
          blanditiis officiis, impedit repellendus quis libero perferendis
          praesentium aut dolor, recusandae quo nostrum. Quasi voluptatum
          libero, sequi fugiat blanditiis dicta similique nulla animi officiis
          quo? Distinctio labore iure, beatae odio nobis fugit aut facere! Sunt
          perferendis illum soluta voluptates recusandae hic doloribus ipsa
          nulla, veniam minus distinctio debitis reprehenderit animi consectetur
          libero accusamus. Eum consequatur ipsum quos debitis corporis nemo
          fuga molestias aut quaerat praesentium, eos minus repellat hic
          architecto nihil maiores similique ducimus odio! Doloremque commodi
          cumque repudiandae iure animi expedita iste necessitatibus! Deserunt,
          possimus excepturi minima eum esse veniam harum repellat laudantium
          cupiditate?
        </p>
      </div>
    </>
  );
};
