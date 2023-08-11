import styles from './Info.module.css'
export default function Info() {
  return (
    <section
      className={`${styles.font} m-2 p-8 w-2/5 min-h-full max-md:w-1/2 max-sm:w-full sticky`}
    >
      <div className='sticky'>
        <h1 className='text-4xl text-center'>
          Kim Ga Jung
        </h1>
        <p className='text-lg text-gray-500 text-center underline underline-offset-4 my-4'>
          FE Developer
        </p>
        <article className='mt-8 text-center'>
          <p className='text-2xl'>Hello🖐️</p>
          코딩을 통해 가치를 구현하는 프론트엔드 개발자
          <span className='font-semibold '> 김가정</span>
          입니다. <br /> 사람들과{' '}
          <span className='bg-yellow-100 font-semibold'>
            소통
          </span>
          과{' '}
          <span className='bg-sky-100 font-semibold'>
            이해
          </span>
          를 통한 협력을 중요시합니다. <br /> 많은{' '}
          <span className='bg-indigo-100 font-semibold'>
            도전
          </span>
          을 통해 실력을 성장시켜 나가는 것을 좋아합니다.
        </article>
      </div>
    </section>
  )
}
