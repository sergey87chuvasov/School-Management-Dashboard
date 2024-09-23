import Image from 'next/image';

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 p-4 flex flex-col gap-4 xl:flex-row'>
      <div className='w-full xl:w-2/3'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
              <Image
                src='https://images.pexels.com/photos/16928285/pexels-photo-16928285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt='img pic'
                width={144}
                height={144}
                className='w-36 h-36 rounded-full object-cover'
              />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
              <h1 className='text-xl font-semibold'>Leonardo Snyder</h1>
              <p className='text-sm text-gray-500'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
                nostrum dolore quis porro tenetur? Veritatis esse officia.
              </p>
              <div className='flex items-center justify-between gap-2 flex-wrap text-xs font-medium'>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image
                    src='/blood.png'
                    alt='icon pic'
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image
                    src='/date.png'
                    alt='icon pic'
                    width={14}
                    height={14}
                  />
                  <span>January 2025</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image
                    src='/mail.png'
                    alt='icon pic'
                    width={14}
                    height={14}
                  />
                  <span>user@gmail.com</span>
                </div>
                <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                  <Image
                    src='/phone.png'
                    alt=' icon pic'
                    width={14}
                    height={14}
                  />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </div>
          <div className='flex-1'></div>
        </div>
        <div className=''>Schedule</div>
      </div>
      <div className='w-full xl:w-1/3'>r</div>
    </div>
  );
};

export default SingleTeacherPage;
