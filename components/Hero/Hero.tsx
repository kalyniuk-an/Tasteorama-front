"use client";

import { useRouter } from 'next/navigation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './HeroBlock.module.css';

const SearchSchema = Yup.object().shape({
  query: Yup.string().required("Search recipes"),
});

export default function Hero() {
  const router = useRouter();
  return (
    <section className={css.heroBlock}>
      <div className={css.overlay}></div>
      <div className={css.container}>
        <div className={css.content}>
          <h1 className={css.title}>Plan, Cook, and Share Your Flavors</h1>

          <Formik
            initialValues={{ query: "" }}
            validationSchema={SearchSchema}
            onSubmit={(values) => {
              const query = values.query.trim();
              if (!query) return;
              router.push(`/tools?search=${encodeURIComponent(query)}`);
            }}
          >
            {({ errors, touched }) => (
              <Form className={css.heroSearch}>
                <div className={css.inputWrapper}>
                  <Field
                    name="query"
                    type="text"
                    placeholder="Search recipes"
                    className={`${css.input} ${errors.query && touched.query ? css.inputError : ""
                      }`}
                  />
                  <ErrorMessage
                    name="query"
                    component="div"
                    className={css.error}
                  />
                </div>
                <button type="submit" className={css.button}>
                  Search
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>


  );
}
