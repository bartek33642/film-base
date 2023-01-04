import React from "react";
import Navbar from "./Navbar";

const Add = () => {
    return(
        <>
            <Navbar />
            <section class="vh-100 bg-image"
  style={{backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')"}} >
  <div class="mask d-flex align-items-center h-100 gradient-custom-3">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-9 col-lg-7 col-xl-6">
          <div class="card" style={{borderRadius: "15px"}}>
            <div class="card-body p-5">
              <h2 class="text-uppercase text-center mb-5">Dodaj film</h2>

              <form>

              <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example1cg">Tytuł</label>
                </div>
                
                <div class="form-outline mb-4">
                  <input type="text" id="form3Example1cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example1cg">Rok produkcji</label>
                </div>

                <div class="form-outline">
                    <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                    <label class="form-label" for="textAreaExample">Opis filmu</label>
                </div>
                                
                <div class="form-outline">
                    <textarea class="form-control" id="textAreaExample" rows="4"></textarea>
                    <label class="form-label" for="textAreaExample">Obsada</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="email" id="form3Example3cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example3cg">Gatunek</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example4cg">Reżyseria</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example4cg">Budżet</label>
                </div>

                <div class="form-outline mb-4">
                  <input type="password" id="form3Example4cdg" class="form-control form-control-lg" />
                  <label class="form-label" htmlFor="form3Example4cdg">Link do zdjęcia</label>
                </div>


                <div class="d-flex justify-content-center">
                  <button type="button"
                    class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" style={{backgroundColor: '#6c757d', border: 'none'}}>Dodaj</button>
                </div>

              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    );
}

export default Add;