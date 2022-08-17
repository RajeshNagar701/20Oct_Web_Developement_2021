import React from "react";
import { useEffect } from "react";
import { getWorkout } from "../feature/workout/workoutSlice";
import { useDispatch } from "react-redux";
import WorkoutList from "../component/WorkoutList";
import WorkoutForm from "../component/WorkoutForm";
function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWorkout());
  }, []);
  return (
    <>
      <div className="container">
        <div className="row align-items-start">
          <div className="col-md-8">
            <WorkoutList />
          </div>
          <div
            className="col-md-4 position-sticky top-0 py-3"
            style={{ height: "auto" }}
          >
            <WorkoutForm />
          </div>
        </div>
      </div>
      <div className="container">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          doloribus nisi commodi sint consectetur repellat! Officia rem quod
          labore sapiente, placeat delectus totam rerum hic repudiandae sit
          voluptate aliquid aspernatur? Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Corrupti asperiores sapiente ab corporis numquam.
          Repellendus similique fugit odio accusantium quod mollitia, debitis
          cumque sed quam consequatur laudantium hic officia aliquam! Soluta,
          tempora debitis quo officiis animi, maxime voluptatum expedita nemo
          deleniti quasi praesentium necessitatibus. Porro explicabo quia, ex
          neque accusamus aliquam, mollitia ea ducimus debitis voluptas ullam
          vero, optio excepturi. Tempore modi quibusdam voluptatibus ab eius
          perferendis eum, quasi ipsum ipsam temporibus saepe, corrupti dolor
          debitis obcaecati quis accusamus. A eum exercitationem similique unde
          magni vitae hic adipisci modi soluta. Veritatis commodi, hic officia
          ipsum ea quos deleniti iusto magni quasi culpa totam perferendis dolor
          ut voluptas omnis est! Expedita maiores natus saepe sint. Earum quasi
          odit quisquam rem ipsam? Esse magnam hic quisquam placeat explicabo
          optio repudiandae aperiam fuga quod totam non voluptatibus blanditiis
          fugit sit omnis pariatur nisi dolores, molestias cumque quaerat
          nesciunt dolore! Optio nostrum ducimus perspiciatis. Debitis optio
          minima possimus dolore porro ratione perspiciatis dolorem quo culpa
          facere recusandae ipsa et explicabo ipsam, itaque neque magnam
          maiores? Pariatur ipsum impedit dolorem molestias nisi, perferendis
          quos reprehenderit. Rerum est ex tempore! Sed neque eos mollitia
          reprehenderit molestias minus, provident sint illo quia natus incidunt
          dignissimos eius amet numquam doloribus nemo hic, et adipisci sapiente
          assumenda molestiae accusamus! Vel praesentium earum dolores,
          reiciendis eligendi beatae optio unde vero odio eaque molestias, error
          tenetur tempora iste aperiam. Corrupti earum repudiandae ipsa
          distinctio! Dolores nobis fugit dignissimos id non provident.
          Perferendis illum animi fuga, pariatur iure dolorem, omnis voluptate
          temporibus quo rerum consequuntur! Cum alias distinctio, similique,
          culpa laudantium corrupti repellendus iste, quo dolores nemo sed
          veniam reiciendis eum tenetur? Quo dolorum hic repellendus reiciendis
          architecto perspiciatis dolores accusamus, quis fuga atque omnis
          deleniti cumque perferendis quisquam enim deserunt, aspernatur
          recusandae commodi asperiores nam possimus eos natus, rerum
          doloremque? Fuga!
        </p>
      </div>
    </>
  );
}

export default Home;
