import Modal from '../common/Modal'

import Button from '../common/Button'
import { AiOutlineDelete } from 'react-icons/ai'
import {
  useState,
  ChangeEvent,
  useCallback,
  MouseEvent,
} from 'react'
import { v4 as uuid } from 'uuid'
import { useImmer } from 'use-immer'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { Category } from '../../types/category'
import {
  addCategory,
  readCategory,
  delCategory,
} from '../../api/category'
import ColorPalette from './colorPalette'

export default function CategoryList({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: (state: boolean) => void
}) {
  const queryClient = useQueryClient()
  const [colorModal, setColorModal] = useState(false)
  const [position, setPosition] = useState([0, 0])
  const [enterData, setEnterData] = useState<Category>({
    id: '',
    color: '#fff',
    name: '',
  })
  const [categories, updateCategories] = useImmer<
    Category[]
  >([])
  const { isLoading, data, isError } = useQuery(
    ['categories', 'read'],
    async () =>
      await readCategory().then((res) => {
        updateCategories([...res])
        return res
      }),
    { staleTime: 1000 * 60 }
  )
  const addList = useCallback(() => {
    updateCategories((draft) => {
      draft.push({ id: uuid(), name: '', color: '#fff' })
    })
  }, [])

  const handleChange = useCallback(
    (id: string, e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      updateCategories((draft) => {
        const category = draft.find(
          (item) => item.id === id
        )
        if (category) category.name = value
      })
    },
    []
  )

  const deleteCategoryQuery = useMutation(
    (id: string) => delCategory(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['categories'])
      },
    }
  )

  const handlePalette = (e: MouseEvent, data: Category) => {
    setEnterData(data)
    let modalHeight =
      e.currentTarget.parentElement?.parentElement
        ?.parentElement?.clientHeight || 0
    setPosition([e.clientX, e.clientY + 30])
    setColorModal(true)
  }

  return (
    <div className='absolute w-[250px] right-[10px] top-[30px]'>
      <Modal open={open} setOpen={setOpen}>
        <h1 className='font-semibold text-center'>
          카테고리
        </h1>
        {categories &&
          categories?.map((category) => (
            <li
              className='flex items-center justify-between py-1'
              key={category.id}
            >
              <div className='flex items-center'>
                <p
                  style={{ background: category.color }}
                  className={`w-[15px] h-[15px] rounded ${
                    category.color === '#fff'
                      ? 'border'
                      : ''
                  }`}
                  onClick={(e) =>
                    handlePalette(e, category)
                  }
                ></p>
                <p className='px-2'>
                  <input
                    value={category.name}
                    onChange={(e) =>
                      handleChange(category.id, e)
                    }
                    onBlur={() => addCategory(category)}
                  />
                </p>
              </div>
              <AiOutlineDelete
                fill='#aaa'
                onClick={() =>
                  deleteCategoryQuery.mutate(category.id)
                }
              />
            </li>
          ))}
        <Button classname='border rounded'>
          <li
            className='cursor-pointer px-4'
            onClick={addList}
          >
            추가하기
          </li>
        </Button>
        <ColorPalette
          open={colorModal}
          setOpen={setColorModal}
          position={position}
          classnames='absolute'
          enterData={enterData}
        />
      </Modal>
    </div>
  )
}
