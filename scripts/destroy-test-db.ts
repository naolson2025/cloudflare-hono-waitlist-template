
const destroyTestDb = async () => {
  await Bun.file('test.sqlite').delete()
  console.log('Test database destoryed')
}

destroyTestDb()