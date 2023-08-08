import styles from './Info.module.css'
export default function Info() {
  return (
    <section
      className={`${styles.font} m-2 p-8 w-2/5 border-r-2 h-full max-md:w-1/2 max-sm:w-full max-sm:border-b-2 max-sm:border-r-0`}
    >
      <h1 className='text-4xl'>Kim Ga Jung</h1>
      <span className='text-lg text-gray-500 underline underline-offset-4'>
        FE Developer
      </span>
      <article className='mt-8'>
        <span className='text-2xl'>Hello🖐️</span>
        코딩을 통해 가치를 구현하는 프론트엔드 개발자
        <span className='font-semibold '> 김가정</span>
        입니다. 사람들과{' '}
        <span className='bg-yellow-100 font-semibold'>
          소통
        </span>
        과{' '}
        <span className='bg-sky-100 font-semibold'>
          협업
        </span>
        을 통한 성장을 중요시합니다. 많은{' '}
        <span className='bg-indigo-100 font-semibold'>
          도전
        </span>
        과 함께 자신을 성장시켜 나가는 것을 좋아합니다.
      </article>
    </section>
  )
}
