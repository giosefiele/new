'use client'
import React, { Component } from 'react'
import Link from 'next/link'

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear()
    return (
      <div className="bg-white py-5 text-yellow-700 text-2xl px-10">
        <div className="text-center py-4">
          <p>
            Copyright © {current_year} Isaiah Orphanage Center. All Rights
            Reserved.
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
