import React, { useState, cloneElement } from 'react'
import cx from 'classnames'

const Tabs = (props) => {

  const [activeIndex, setActiveIndex] = useState(props.defaultActiveIndex || 0)

  const handleTabClick = (tabIndex) => {
    if (tabIndex !== activeIndex) {
      setActiveIndex(tabIndex)
    }

    if (props.onClick) {
      props.onClick(tabIndex)
    }
  }

  const cloneTabElement = (tab, index = 0) => {
    return (
      cloneElement(tab, {
        onClick: () => handleTabClick(index),
        tabIndex: index,
        isActive: index === activeIndex,
      })
    )
  }

  const renderChildrenTabs = () => {
    const { children } = props
    if (!Array.isArray(children)) {
      return cloneTabElement(children)
    }

    return children.map(cloneTabElement)
  }

  const renderActiveTabContent = () => {
    const { children } = props

    console.log(Array.isArray(children))

    if (children[activeIndex]) {
      return children[activeIndex].props.children
    }

    return children.props.children
  }

  const { className } = props

  const cssClass = cx('tabs', className)

  return (
    <section className={cssClass}>
      <ul className={'tabs__list'}>
        {renderChildrenTabs()}
      </ul>
      <div className={'tabs__content'}>
        {renderActiveTabContent()}
      </div>
    </section>
  )
}

export default Tabs
