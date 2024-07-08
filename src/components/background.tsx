export function Background() {
  return (
    <div className='fixed inset-0 -z-10 w-screen h-screen bg-background bg-[radial-gradient(#1e293b_1px,transparent_1px)] dark:bg-[radial-gradient(#0f172a_1px,transparent_1px)] [background-size:16px_16px]'>
      <div className='absolute bottom-auto left-auto right-0 top-0 h-[400px] w-[400px] translate-x-[-20%] translate-y-[-70%] md:translate-x-[10%] md:-translate-y-[10%] rounded-full bg-[rgba(56,189,248,0.4)] opacity-50 blur-[80px]' />
      <div className='absolute top-auto left-0 right-auto bottom-0 h-[400px] w-[400px] translate-x-[10%] translate-y-[50%] md:-translate-x-[20%] md:translate-y-[35%] rounded-full bg-[rgba(139,92,246,0.4)] opacity-50 blur-[80px]' />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-[rgba(99,102,241,0.4)] opacity-50 blur-[100px]' />
    </div>
  )
}
