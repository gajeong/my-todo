import {
  useState,
  MouseEvent,
  useCallback,
  ChangeEvent,
} from 'react'
import Button from '../../../components/common/Button'
import { RiDeleteBin2Line } from 'react-icons/ri'
import {
  BiSolidToggleLeft,
  BiSolidToggleRight,
} from 'react-icons/bi'
import ColorPalette from '../../todo/colorPalette'
import { Category } from '../../../types/category'
import { v4 as uuid } from 'uuid'
import {
  addCategory,
  readCategory,
  delCategory,
  changeStatus,
} from '../../../api/posts/category'
import {
  useMutation,
  useQuery,
  useQueryClient,
} from 'react-query'
import { useImmer } from 'use-immer'
export default function EditCategory() {
  const [categories, updateCategories] = useImmer<
    Category[]
  >([])
  const queryClient = useQueryClient()
  const [position, setPosition] = useState([0, 0])
  const [colorModal, setColorModal] = useState(false)
  const [enterData, setEnterData] = useState<Category>({
    id: '',
    color: '#fff',
    name: '',
  })
  const handlePalette = (e: MouseEvent, data: Category) => {
    setEnterData(data)
    setPosition([e.clientX, e.clientY + 30])
    setColorModal(true)
  }

  const addCategoryItem = () => {
    updateCategories([
      ...categories,
      { id: uuid(), name: '', color: '#fff', status: true },
    ])
  }

  const changeCategory = useMutation(
    (data: Category) => addCategory(data),
    {
      onSuccess: () =>
        queryClient.invalidateQueries([
          'posts',
          'categories',
        ]),
    }
  )

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

  const changeColor = async (data: Category) => {
    await changeCategory.mutate(data, {
      onSuccess: () => {
        setColorModal(false)
      },
    })
  }

  const { isLoading, data, isError } = useQuery(
    ['posts', 'categories'],
    async () =>
      await readCategory().then((res) => {
        updateCategories([...res])
        return res
      }),
    { staleTime: 1000 * 60 }
  )

  const deleteCategoryQuery = useMutation(
    (id: string) => delCategory(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          'posts',
          'categories',
        ])
      },
    }
  )
  const changeMenuStatusQuery = useMutation(
    (data: Category) => changeStatus(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([
          'posts',
          'categories',
        ])
      },
    }
  )
  return (
    <div>
      <h2 className='text-center text-lg'>
        포스트 카테고리
      </h2>
      {categories &&
        categories.map((category) => (
          <li
            className='flex items-center justify-between py-1'
            key={category.id}
          >
            <div className='flex items-center grow'>
              <p
                style={{ background: category.color }}
                className={`w-[15px] h-[15px] rounded ${
                  category.color === '#fff' ? 'border' : ''
                }`}
                onClick={(e) => handlePalette(e, category)}
              ></p>
              <p className='px-2 grow'>
                <input
                  className='w-full'
                  value={category.name}
                  onChange={(e) =>
                    handleChange(category.id, e)
                  }
                  onBlur={() => addCategory(category)}
                />
              </p>
            </div>
            {category.status ? (
              <BiSolidToggleRight
                size={30}
                fill='#9EB384'
                onClick={() =>
                  changeMenuStatusQuery.mutate({
                    ...category,
                    status: false,
                  })
                }
              />
            ) : (
              <BiSolidToggleLeft
                size={30}
                fill='#bbb'
                onClick={() =>
                  changeMenuStatusQuery.mutate({
                    ...category,
                    status: true,
                  })
                }
              />
            )}
            <RiDeleteBin2Line
              fill='#aaa'
              size={20}
              onClick={() =>
                deleteCategoryQuery.mutate(category.id)
              }
            />
          </li>
        ))}

      <div onClick={addCategoryItem} className='mt-4'>
        <Button classname='border'>추가</Button>
      </div>
      <ColorPalette
        open={colorModal}
        setOpen={setColorModal}
        position={position}
        classnames='absolute'
        enterData={enterData}
        changeColor={changeColor}
      />
    </div>
  )
}
